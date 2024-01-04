import ProfileItem from '@/components/ProfileItem';
import { MessageStatus } from '@/interfaces/types';
import { formatTimestamp } from '@/utils';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Badge, SegmentedButtons, Text, useTheme, FAB } from 'react-native-paper';

const ChatScreen = () => {
  const { colors } = useTheme();
  const [isLastMsgMine] = useState(false);
  const [unreadMsgCount] = useState(1);
  const [value, setValue] = React.useState('All');

  let messageStatus: MessageStatus = 'read';

  const statusIconProps = () => {
    let props = { color: colors.outline, name: 'clock-outline' };
    switch (messageStatus) {
      case 'failed':
        props = { ...props, name: 'information-outline', color: colors.error };
        break;
      case 'sent':
        props = { ...props, name: 'check' };
        break;
      case 'received':
        props = { ...props, name: 'check-all' };
        break;
      case 'read':
        props = { ...props, name: 'check-all', color: colors.primary };
        break;
      default:
        break;
    }
    return props;
  };

  const props = {
    checkedColor: colors.onPrimary,
    showSelectedCheck: true,
    labelStyle: { fontWeight: 'bold', fontSize: 16, padding: 5 },
  } as any;

  return (
    <View style={{ padding: 15 }}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          { ...props, value: 'All', label: 'All' },
          { ...props, value: 'Private', label: 'Private' },
          { ...props, value: 'Group', label: 'Group' },
        ]}
        theme={{ colors: { secondaryContainer: colors.primary } }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {Array.from({ length: 20 }, (it, idx) => {
          return (
            <TouchableOpacity style={styles.listItem} key={idx} activeOpacity={0.8}>
              <ProfileItem
                title='Dr. Alysa Hana'
                description='Ok, do you have fever? is the headache severe?'
                titleMaxLength={15}
              />
              <View style={{ justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
                <Text variant='titleSmall'>{formatTimestamp('2024-01-04T20:15:31')}</Text>

                {isLastMsgMine ? (
                  <MaterialCommunityIcons
                    name={statusIconProps().name}
                    color={statusIconProps().color}
                    size={20}
                  />
                ) : (
                  <Badge
                    visible={unreadMsgCount > 0}
                    size={20}
                    theme={{ colors: { error: colors.primary } }}
                    style={{ fontWeight: 'bold' }}
                  >
                    {unreadMsgCount}
                  </Badge>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <FAB
        icon='chat-plus'
        style={styles.fab}
        onPress={() => console.log('Pressed')}
        theme={{
          colors: { primaryContainer: colors.primary, onPrimaryContainer: colors.onPrimary },
        }}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 22,
    width: '100%',
    paddingTop: 15,
    paddingBottom: 80,
  },
  listItem: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  fab: {
    position: 'absolute',
    margin: 15,
    right: 0,
    bottom: 50,
    borderRadius: 50,
  },
});
