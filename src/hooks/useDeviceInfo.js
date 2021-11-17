import {useState, useEffect} from 'react';
import DeviceInfo from 'react-native-device-info';

const useDeviceInfo = () => {
  const [deviceName, setDeviceName] = useState('');

  useEffect(() => {
    DeviceInfo.getDeviceName().then(value => {
      setDeviceName(value);
      const device = `${value} - ${DeviceInfo.getSystemName()} - ${DeviceInfo.getSystemVersion()}`;
      setDeviceName(device);
    });
  }, []);

  return deviceName;
};

export default useDeviceInfo;
