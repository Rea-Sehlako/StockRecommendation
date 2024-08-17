import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';

const API_KEY = 'jcS4m7QmadZ4v16snGqTsaEGUh9awPJ3';

export default function StockSuggestions({ navigation, preferredVehicle, preferredIndustry }) {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        // Fetch stocks filtered by the preferred investment vehicle and industry
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/stock-screener`, {
          params: {
            //limit: 100,
            type: preferredVehicle,
            industry: preferredIndustry,
            apikey: API_KEY
          }
        });
        const filteredStocks = response.data;

        // Randomly select 5 stocks from the filtered list
        const random5Stocks = filteredStocks.sort(() => 0.5 - Math.random()).slice(0, 5);

        setStocks(random5Stocks);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    fetchStocks();
  }, [preferredVehicle, preferredIndustry]);

  const renderItem = ({ item }) => (
    <View style={{ padding: 20, marginBottom: 20, backgroundColor: '#f8f8f8' }}>
      <Image
        source={{ uri: `https://financialmodelingprep.com/image-stock/${item.symbol}.png` }}
        style={{ width: 100, height: 100, marginBottom: 10 }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.symbol} - {item.companyName}</Text>
      <Text style={{ fontSize: 16, color: '#555' }}>{item.sector}</Text>
      <Text style={{ fontSize: 16, color: '#555' }}>Price: ${item.price}</Text>
      <Text style={{ fontSize: 16, color: item.changesPercentage >= 0 ? 'green' : 'red' }}>
        {item.changesPercentage}% ({item.change >= 0 ? '+' : ''}{item.change})
      </Text>
      <TouchableOpacity
        style={{ padding: 10, backgroundColor: '#007bff', marginTop: 10 }}
        onPress={() => alert(`Buy ${item.symbol}`)}
      >
        <Text style={{ color: '#fff' }}>Buy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 10, backgroundColor: '#28a745', marginTop: 10 }}
        onPress={() => alert(`${item.symbol} added to watchlist`)}
      >
        <Text style={{ color: '#fff' }}>Add to Watchlist</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 10, backgroundColor: '#ffc107', marginTop: 10 }}
        onPress={() => navigation.navigate('StockDetails', { symbol: item.symbol })}
      >
        <Text style={{ color: '#000' }}>Read More</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={stocks}
      renderItem={renderItem}
      keyExtractor={item => item.symbol}
      contentContainerStyle={{ padding: 20 }}
    />
  );
}
