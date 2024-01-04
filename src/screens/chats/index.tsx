import ProfileItem from '@/components/ProfileItem';
import { formatTimestamp } from '@/utils';
import moment from 'moment';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Badge, Text, useTheme } from 'react-native-paper';

const ChatScreen = () => {
  const { colors } = useTheme();
  const [isLastMsgMine, setIsLastMsgMine] = useState(false);
  const [unreadMsgCount, setUnreadMsgCount] = useState(32);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ProfileItem
          title='Dr. Marcus Horizontal'
          description='Ok, do you have fever? is the headache severe?'
        />
        <View style={{ justifyContent: 'space-evenly' }}>
          <Text variant='titleSmall' style={{ fontWeight: 'bold', color: colors.outline }}>
            {formatTimestamp(moment('2024-01-04T17:09:31Z').startOf('hour').fromNow(), 'elapsed')}
          </Text>
          <Badge
            visible={!isLastMsgMine && unreadMsgCount > 0}
            size={24}
            theme={{ colors: { error: colors.primary } }}
            style={{ fontWeight: 'bold' }}
          >
            {unreadMsgCount}
          </Badge>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15 },
  wrapper: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
});
