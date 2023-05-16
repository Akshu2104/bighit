import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Search = () => {
  const [data, setData] = useState();
  const [input, setInput] = useState('');
  console.log('data', input);
  useEffect(() => {
    fetchData();
  }, [input]);

  const fetchData = async () => {
    try {
      var posts = await fetch('https://jsonplaceholder.typicode.com/posts');
      let response = await posts.json();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const onSearch = () => {
    let filtered = [];
    if (data.length > 0 && input !== '') {
      data?.map(item => {
        if (input === item.title) {
          filtered.push(item);
        }
      });
      setData(filtered);
    } else {
      setData(data);
    }
  };

  const posts = item => {
    return (
      <View style={styles.posts}>
        <Text style={styles.title}>Title: {item.item.title}</Text>
        <Text style={styles.body}>Body: {item.item.body}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.main}>
        <Text>Hello</Text>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={text => setInput(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onSearch();
          }}>
          <Text style={styles.text}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList data={data} renderItem={posts} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  // container: {},
  main: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    top: 200,
  },
  input: {
    borderWidth: 2,
    height: 40,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 20,
    width: 150,
    alignSelf: 'center',
    backgroundColor: 'green',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  list: {
    marginHorizontal: 10,
    flex: 1,
    top: 40,
  },
  posts: {
    borderWidth: 1,
    marginVertical: 5,
    padding: 10,
  },
  title: {
    fontSize: 20,
  },
  body: {
    fontSize: 15,
  },
});
export default Search;
