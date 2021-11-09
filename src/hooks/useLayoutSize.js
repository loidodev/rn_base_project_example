const {useState, useCallback} = require('react');

const useLayoutSize = () => {
  const [size, setSize] = useState(null);

  const onLayout = useCallback(event => {
    const layout = event.nativeEvent.layout;
    setSize(layout);
  }, []);

  return [size, onLayout];
};

export default useLayoutSize;
