import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

const API_KEY = 'jcS4m7QmadZ4v16snGqTsaEGUh9awPJ3';

export default function StockDetails({ route }) {
  const { symbol } = route.params;
  const [stockDetails, setStockDetails] = useState(null);

  useEffect(() => {
    const fetchStockDetails = async () => {
      try {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${API_KEY}`);
        setStockDetails(response.data[0]);
      } catch (error) {
        console.error('Error fetching stock details:', error);
      }
    };

    fetchStockDetails();
  }, [symbol]);

  if (!stockDetails) return <Text>Loading...</Text>;

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{stockDetails.companyName}</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>{stockDetails.description}</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>Price: ${stockDetails.price}</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>Sector: {stockDetails.sector}</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>Industry: {stockDetails.industry}</Text>
    </ScrollView>
  );
}
