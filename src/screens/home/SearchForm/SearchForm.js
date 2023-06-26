import {StyleSheet, View} from 'react-native';import Button from '../../../components/Button';import DynamicInput from '../../../components/DynamicInput';import BottomSheetModal from '../../../components/BottomSheetModal';import {useState} from 'react';import {useSelector} from 'react-redux';import {Calendar} from 'react-native-calendars';import moment from 'moment';import {useTranslation} from 'react-i18next';import {useNavigation} from '@react-navigation/native';import {useAppDispatch} from '../../../../store';import {setDepartureDate, setFrom, setTo} from '../../../../slices/flightBookingSlice';const DATE_FORMAT = 'DD/MM/YYYY';const useStyles = () => {  return StyleSheet.create({    wrapper: {      gap: 8,      paddingHorizontal: '10%',      paddingVertical: 32    },    dateInputsWrapper: {      flexDirection: 'row',      gap: 8    },    dateInput: {      flex: 1    }  })};const SearchForm = () => {  const [departureDateModalVisible, setDepartureDateModalVisible] = useState(false);  const from = useSelector(state => state.flightBooking.from);  const to = useSelector(state => state.flightBooking.to);  const departureDate = useSelector(state => state.flightBooking.departureDate);  const {t} = useTranslation();  const navigation = useNavigation();  const styles = useStyles();  const dispatch = useAppDispatch();  const getCurrentDate = () => {    return departureDate ?      moment(departureDate).format('YYYY-MM-DD')      : moment().format('YYYY-MM-DD');  };  const getMarkedDates = () => {    const defaultMarkedDate = departureDate ? moment(departureDate) : moment();    return {[defaultMarkedDate.format('YYYY-MM-DD')]: { selected: true, marked: true }}  };  const onLocalizationChange = (localization, type) => {    if (type === 'from') {      dispatch(setFrom({city: localization.city, airport: localization.airport}));    } else {      dispatch(setTo({city: localization.city, airport: localization.airport}));    }  };  return (    <View style={styles.wrapper}>      <DynamicInput        label={t('homePage.from')}        value={from.airport ? `${from.city} ${from.airport}` : t('homePage.pickFromLocation')}        onPress={() => navigation.navigate('LocalizationPickerScreen', {          onValueChange: localization => onLocalizationChange(localization, 'from'),          type: 'from',          currentTo: to,        })}      />      <DynamicInput        label={t('homePage.to')}        value={to.airport ? `${to.city} ${to.airport}` : t('homePage.pickToLocation')}        onPress={() => navigation.navigate('LocalizationPickerScreen', {          onValueChange: localization => onLocalizationChange(localization, 'to'),          type: 'to',          currentFrom: from        })}      />      <DynamicInput        label="Departure"        value={departureDate ? moment(departureDate).format(DATE_FORMAT) : t('homePage.pickADate')}        onPress={() => setDepartureDateModalVisible(!departureDateModalVisible)}      />      <Button        text={t('homePage.search')}        onPress={() => navigation.navigate('FlightPickerScreen')}        disabled={!from || !to || !departureDate}      />      <BottomSheetModal        visible={departureDateModalVisible}        onHide={() => setDepartureDateModalVisible(false)}      >        <Calendar          onDayPress={day => {            dispatch(setDepartureDate(day.timestamp));            setDepartureDateModalVisible(false);          }}          current={getCurrentDate()}          markedDates={getMarkedDates()}        />      </BottomSheetModal>    </View>  )};export default SearchForm;