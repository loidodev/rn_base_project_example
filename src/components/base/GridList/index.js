import React, {useMemo} from 'react';
import {FlatList, View} from 'react-native';

const GridList = ({
  numColumns = 2,
  data = [],
  renderItem,
  contentContainerStyle,
}) => {
  const newData = useMemo(() => {
    let result = data;

    const totalRows = Math.floor(result.length / numColumns);
    let totalLastRow = result.length - totalRows * numColumns;

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      result.push({empty: true});
      totalLastRow++;
    }

    return result;
  }, [data, numColumns]);

  return (
    <View>
      <FlatList
        numColumns={numColumns}
        data={newData}
        keyExtractor={(_, index) => String(index)}
        renderItem={renderItem}
        contentContainerStyle={contentContainerStyle}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GridList;
