import React, {useState, useEffect} from 'react';

import {View, Text, Dimensions} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

const ViewTypes = {
  FULL: 0,
  HALF_LEFT: 1,
  HALF_RIGHT: 2,
};

function RecyclerList() {
  let {width} = Dimensions.get('window');
  const [data, setData] = useState<string[]>([]);
  useEffect(() => {
    // 模拟获取数据
    const fetchData = async () => {
      // 这里可以是从 API 获取数据的逻辑
      const newData = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
      ];
      setData(newData);
    };
    fetchData();
  }, []);
  const dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
    data,
  );
  const layoutProvider = new LayoutProvider(
    index => {
      // 返回不同行的类型（例如，单行、双行等），根据实际需求进行调整
      if (index % 3 === 0) {
        return ViewTypes.FULL;
      } else if (index % 20 === 0) {
        return ViewTypes.HALF_LEFT;
      } else {
        return ViewTypes.HALF_RIGHT;
      }
    },
    (type, dim) => {
      switch (type) {
        case ViewTypes.HALF_LEFT:
          dim.width = width / 2 - 0.0001;
          dim.height = 160;
          break;
        case ViewTypes.HALF_RIGHT:
          dim.width = width / 2;
          dim.height = 160;
          break;
        case ViewTypes.FULL:
          dim.width = width;
          dim.height = 140;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
      }
    },
  );
  const rowRenderer = (type: string | number, data: string, index: number) => {
    return (
      <View style={{padding: 10, backgroundColor: 'red', borderWidth: 1}}>
        <Text>
          {data} {index}
        </Text>
      </View>
    );
  };

  return (
    <RecyclerListView
      layoutProvider={layoutProvider}
      dataProvider={dataProvider}
      rowRenderer={rowRenderer}
    />
  );
}

export default RecyclerList;
