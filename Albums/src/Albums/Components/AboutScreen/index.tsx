import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AboutScreen = () => {
  const [language, setLanguage] = useState('eng');

  const translations = {
    eng: {
      'About Us': 'About Us',
      "Welcome to E-Reviews, our mobile application that transforms your e-commerce shopping experience and promotes conscious consumption! Now, with the help of insightful product reviews, you can make healthier decisions while shopping. e-reviews provides you with a treasure trove of real user reviews. You can explore users' experiences to understand what products mean for your health and well-being.":
        "Welcome to E-Reviews, our mobile application that transforms your e-commerce shopping experience and promotes conscious consumption! Now, with the help of insightful product reviews, you can make healthier decisions while shopping. E-Reviews provides you with a treasure trove of real user reviews. You can explore users' experiences to understand what products mean for your health and well-being.",
      'Contact:': 'Contact:',
      'Mail:': 'Mail:',
    },
    tr: {
      'About Us': 'Hakkımızda',
      "Welcome to E-Reviews, our mobile application that transforms your e-commerce shopping experience and promotes conscious consumption! Now, with the help of insightful product reviews, you can make healthier decisions while shopping. e-reviews provides you with a treasure trove of real user reviews. You can explore users' experiences to understand what products mean for your health and well-being.":
        "E-Reviews'a hoş geldiniz, e-ticaret alışveriş deneyiminizi dönüştürür ve bilinçli tüketimi teşvik eder! Şimdi, derinlemesine ürün incelemeleri ile alışveriş yaparken daha sağlıklı kararlar alabilirsiniz. E-Reviews, size gerçek kullanıcı yorumlarının bir hazine sandığı sunar. Ürünlerin sağlık ve iyi olma durumunuz için ne anlama geldiğini anlamak için kullanıcı deneyimlerini keşfedebilirsiniz.",
      'Contact:': 'İletişim:',
      'Mail:': 'E-posta:',
    },
  };

  const translateText = text => {
    return translations[language][text] || text;
  };

  const handleTranslatePress = () => {
    setLanguage(language === 'eng' ? 'tr' : 'eng');
  };

  const handleContactPress = () => {
    Alert.alert(translateText('Contact:'), '0555555555', [{text: 'ok'}]);
  };

  const handleContactPressTwo = () => {
    Alert.alert(translateText('Mail:'), 'asd@gmail.com', [{text: 'ok'}]);
  };

  return (
    <View style={styles.contain}>
      <View style={styles.header}>
        <View style={styles.textNotification}>
          <Text style={styles.text}>{translateText('About Us')}</Text>
          <Text style={styles.subtext}>
            {translateText(
              "Welcome to E-Reviews, our mobile application that transforms your e-commerce shopping experience and promotes conscious consumption! Now, with the help of insightful product reviews, you can make healthier decisions while shopping. e-reviews provides you with a treasure trove of real user reviews. You can explore users' experiences to understand what products mean for your health and well-being.",
            )}
          </Text>
          <View style={styles.contactline}>
            <TouchableOpacity onPress={handleContactPress}>
              <View style={styles.contactContainer}>
                <Text style={styles.contactLeft}>
                  {translateText('Contact:')}
                </Text>
                <Text style={styles.contactright}>05555555555</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleContactPressTwo}>
              <View style={styles.x}>
                <View style={styles.contactContainer}>
                  <Text style={styles.contactLeft}>
                    {translateText('Mail:')}
                  </Text>
                  <Text style={styles.contactright}>asd@gmail.com</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handleTranslatePress}>
        <Text style={styles.language}>{language === 'eng' ? 'TR' : 'EN'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8FBC8F',
  },
  contain: {
    backgroundColor: '#8FBC8F',
    flex: 1,
  },
  textNotification: {
    flex: 1,
  },
  text: {
    fontSize: 29,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 25,
    fontFamily: 'sans-serif',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    margin: 11,
    padding: 11,
  },
  subtext: {
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginTop: 7,
    padding: 9,
    margin: 11,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 170,
    borderRadius: 7,
    borderColor: 'white',
    borderWidth: 2,
  },
  contactline: {
    flexDirection: 'row',
    paddingHorizontal: 13,
  },
  contactContainer: {
    flexDirection: 'row',
    // borderWidth: 1,
    marginRight: 1,
  },
  contactLeft: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 15,
  },
  contactright: {
    fontSize: 15,
    color: 'blue',
    marginTop: 15,
  },
  x: {
    marginLeft: 55,
  },
  language: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginVertical: 10,
  },
});

export default AboutScreen;
