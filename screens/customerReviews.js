import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet ,ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CustomerReviews = () => {
  return (
  <ScrollView>
    <View style={styles.container}>
    <View style={styles.firstHeader}>
    <Text style={styles.firstTitle}>Customer Reviews(24)</Text>
    <Text style={styles.seeAllText}>All Reviews</Text>
    </View>
      {[1, 2, 3].map((i) => (
        <View key={i} style={styles.reviewContainer}>
          <View style={styles.reviewHeader}>
            <Image
              source={{ uri: `https://randomuser.me/api/portraits/men/${i}.jpg`}}
              style={styles.avatar}
            />
            <View style={styles.reviewInfo}>
              <Text style={styles.username}>Mark Jacob</Text>
              <Text style={styles.separator}>|</Text>
              <Text style={styles.date}>20 Aug, 2021</Text>
            </View>
          </View>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((j) => (
              <FontAwesome
                key={j}
                name="star"
                size={16}
                color={j <= 4 ? '#ffc107' : '#dcdcdc'}
              />
            ))}
          </View>
          <Text style={styles.reviewText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis
            vel lorem eu feugiat. 
            eu.
          </Text>
          <View style={styles.actions}>
            <View style={styles.size}>
              <Text>Size bought XL</Text>
            </View>
            <View style={styles.likes}>
              <TouchableOpacity style={styles.likeButton}>
                <FontAwesome name="thumbs-o-up" size={24} color="#808080" />
              </TouchableOpacity>
              <Text style={styles.likeCount}>10</Text>
              <TouchableOpacity style={styles.dislikeButton}>
                <FontAwesome name="thumbs-o-down" size={24} color="#808080" />
              </TouchableOpacity>
              <Text style={styles.dislikeCount}>2</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  reviewContainer: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 16,
  },
  container: {
    marginBottom: 12,
    marginTop: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
  },
  firstHeader:{
    flexDirection: 'row',
    marginTop:10,
    marginBottom:2
  },
  firstTitle:{
    fontSize: 14,
    marginRight:100,
    color:"#ffc107"
  },
  seeAllText:{
    fontSize: 14,
    marginRight:10 ,
    color:"grey"
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  reviewInfo: {
    marginLeft: 16,
    flexDirection:"row"
  },
  username: {
    fontSize: 16,
    marginRight:10
  },
  date: {
    fontSize: 15,
    color: '#808080',
    marginLeft:10
  },
  rating: {
    flexDirection: 'row',
    marginTop: 8,
  },
  reviewText: {
    marginTop: 10,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  size: {
    backgroundColor: '#dcdcdc',
    borderRadius: 4,
    padding: 8,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  likeButton: {
    marginRight: 8,
  },
  dislikeButton: {
    marginRight: 8,
  },
  likeCount: {
    marginRight: 16,
  },
  dislikeCount: {
    marginLeft: 8,
  },
});

export default CustomerReviews;
