import json
import numpy as np
import tensorflow as tf
from tensorflow import keras


# Hardcoded EDA data
eda_data = np.array([0.092, 0.120, 0.320, 0.230, 0.134, 0.037, 0.039, 0.041, 0.041, 0.036, 0.032, 0.025, 0.035, 0.036, 0.025, 0.032, 0.001, 0.007, 0.002, 0.005])
window_size = 5  # Define the size of the window
num_features = 1  # EDA signal is a single feature

labels = ['Hydrated', 'Mildly Dehydrated', 'Extremely Dehydrated']

# Prepare data for CNN
def prepare_data(data, window_size, labels):
    X = []
    y = []
    for i in range(len(data) - window_size):
        window = data[i:i + window_size]
        label = data[i + window_size]  # Adjusted to use data instead of labels
        X.append(window)
        # Instead of appending the data value, find the corresponding label based on thresholds
        if label < 0.025:
            y.append(labels[0])  # Hydrated
        elif 0.025 <= label < 0.035:
            y.append(labels[1])  # Mildly Dehydrated
        else:
            y.append(labels[2])  # Extremely Dehydrated
    return np.array(X), np.array(y)


X, y = prepare_data(eda_data, window_size, labels)

# Reshape data for CNN input
X = np.expand_dims(X, axis=-1)

# Convert labels to one-hot encoding
y_one_hot = np.zeros((len(y), len(labels)))
for i, label in enumerate(y):
    label_index = labels.index(label)
    y_one_hot[i, label_index] = 1

# Define the CNN model
model = tf.keras.Sequential([
    tf.keras.layers.Conv1D(32, 3, activation='relu', input_shape=(window_size, num_features)),
    tf.keras.layers.MaxPooling1D(2),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(len(labels), activation='softmax')  # Output layer for multi-class classification
])

# Compile the model
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Split data into training and testing sets
split = int(0.8 * len(X))
train_data, test_data = X[:split], X[split:]
train_labels, test_labels = y_one_hot[:split], y_one_hot[split:]

# Train the model
model.fit(train_data, train_labels, epochs=10, batch_size=32, validation_split=0.2)

# Evaluate the model on test data
test_loss, test_acc = model.evaluate(test_data, test_labels)
print(f"Test Accuracy: {test_acc}")
print(f"Test Loss: {test_loss}")

# Predict hydration status for test data
predictions = model.predict(test_data)

# Define a threshold for classification
threshold = 0.5

# Print hydration status based on predictions
for pred in predictions:
    max_prob_index = np.argmax(pred)
    print(labels[max_prob_index])

output_file = 'predictions.json'
output_data = {'predictions': [labels[np.argmax(pred)] for pred in predictions]}

with open(output_file, 'w') as f:
    json.dump(output_data, f)

print(f"Predictions written to {output_file}")
