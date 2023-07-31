import {StyleSheet, View} from 'react-native';import Modal from 'react-native-modal';import React, {useState} from 'react';import {IconButton, Text, useTheme} from 'react-native-paper';import {TouchableOpacity} from 'react-native-gesture-handler';import {useTranslation} from 'react-i18next';import {useNavigation} from '@react-navigation/native';const useStyles = () => {  const {colors} = useTheme();  return StyleSheet.create({    modal: {      justifyContent: 'flex-end',      alignItems: 'flex-end',      margin: 0,    },    closeIcon: {      marginLeft: 'auto',      marginRight: 0,    },    content: {      backgroundColor: colors.white,      flex: 1,      width: '75%',      paddingVertical: 48,      paddingHorizontal: 16,      borderTopLeftRadius: 10,      borderBottomLeftRadius: 10,    },    listItem: {      flexDirection: 'row',      alignItems: 'center',    },    listItemText: {      fontSize: 18,    }  })};const SideMenu = (  {    visible = false,    onHide = () => void 0  }) => {  const {t, i18n} = useTranslation();  const navigation = useNavigation();  const styles = useStyles();  return (    <Modal      isVisible={visible}      onBackdropPress={onHide}      onSwipeComplete={onHide}      style={styles.modal}      animationIn="slideInRight"      animationOut="slideOutRight"    >      <View style={styles.content}>        <IconButton          icon="close"          size={32}          onPress={onHide}          style={styles.closeIcon}        />        <View>          <TouchableOpacity onPress={() => {navigation.navigate('ProfileScreen'); onHide()}}>            <View style={styles.listItem}>              <IconButton icon="account-circle-outline" size={32} />              <Text style={styles.listItemText}>{t('sideMenu.profileSettings')}</Text>            </View>          </TouchableOpacity>          <TouchableOpacity onPress={() => {navigation.navigate('MyBookingsScreen'); onHide()}}>            <View style={styles.listItem}>              <IconButton icon="clipboard-minus-outline" size={32} />              <Text style={styles.listItemText}>{t('sideMenu.myBookings')}</Text>            </View>          </TouchableOpacity>          <TouchableOpacity onPress={() => {i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en'); onHide()}}>            <View style={styles.listItem}>              <IconButton icon="flag-variant" size={32} />              <Text style={styles.listItemText}>                {t('sideMenu.switchTo')} {i18n.language === 'en' ? 'Spanish' : 'English'}              </Text>            </View>          </TouchableOpacity>        </View>      </View>    </Modal>  )}export default SideMenu;