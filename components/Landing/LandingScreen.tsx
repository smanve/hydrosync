import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ProgressChart } from 'react-native-chart-kit';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import RootStackParamList from types.ts
import { useNavigation } from '@react-navigation/native';


const LandPage: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleGrandma = () => {
    navigation.navigate('Grandma'); // Navigate to SignupPage
  };

  // Dummy data for demonstration
  const originalData = [1, 2, 2, 2, 3, 1, 2]; // Original data values

  // Calculate the adjustment value to ensure the lowest data point is 1
  const minValue = Math.min(...originalData);
  const adjustmentValue = 1 - minValue;

  // Adjust the data by adding the adjustment value
  const adjustedData = originalData.map(value => value + adjustmentValue);

  const data = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        data: adjustedData, // Assigning adjusted data values
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGrandma} style={styles.grandmaButton}>
  <Text style={styles.grandmaText}>{'<-  Grandma'}</Text>
</TouchableOpacity>

      <View style={styles.donutContainer}>
        <ProgressChart
          data={{
            labels: ['Hydrated'],
            data: [1],
          }}
          width={250} // Increased width for larger donut
          height={250} // Increased height for larger donut
          strokeWidth={21}
          radius={98} // Increased radius for larger donut
          chartConfig={{
            backgroundGradientFrom: '#F5FDFF', // Updated background color
            backgroundGradientTo: '#F5FDFF', // Updated background color
            color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`, // Dark green color
          }}
          hideLegend={true}
        />
      </View>
      <Text style={styles.hydrationText}>Hydrated</Text>
      <Text style={styles.oneText}>100%</Text>
      <View style={styles.chartContainer}>
        <View>
          <LineChart
            data={data}
            width={350} // Increased width for higher resolution
            height={250} // Increased height for higher resolution
            chartConfig={{
              backgroundGradientFrom: '#D4E6FF', // Updated background color
              backgroundGradientTo: '#D4E6FF', // Updated background color
              decimalPlaces: 0, // Remove decimal places for categorical data
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black line color
              labelColor: (opacity = 0.5) => `rgba(0, 0, 0, ${opacity})`, // Black label color
            }}
            bezier={false} // Draw straight lines between data points
            yAxisInterval={1} // Define interval for y-axis labels
            withVerticalLines={false} // Disable vertical grid lines
            withHorizontalLines={true} // Enable horizontal grid lines
            style={{ paddingVertical: 10 }} // Apply padding to remove shading
          />
          <View style={styles.overlay}>
            <Text style={styles.hydrationLevelText}>Hydration Level</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FDFF',
    marginTop: 40,
  },
  grandmaText: {
    position: 'absolute',
    top: -10,
    left: 0,
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  chartContainer: {
    marginBottom: -315,
    alignItems: 'center',
    backgroundColor: '#D4E6FF',
    borderRadius: 15,
  },
  donutContainer: {
    marginBottom: 40,
    position: 'absolute',
    top: 50,
    alignItems: 'center',
  },
  centerText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  hydrationText: {
    position: 'absolute',
    top: 147,
    fontSize: 34,
    fontWeight: 'bold',
  },
  oneText: {
    position: 'absolute',
    top: 188,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#737373',
  },
  hydrationLevelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text color
  },
  overlay: {
    position: 'absolute',
    backgroundColor: '#60A1FF', // Red background color
    padding: 10,
    borderRadius: 25,
    top: -30,
    left: 10,
  },
  grandmaButton: {
    position: 'absolute',
    top: 0,
    left: 10,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: 'transparent',
  },
  
});

export default LandPage;
