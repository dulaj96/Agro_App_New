import React, { useEffect, useState } from "react";
import {Text, View} from 'react-native';
import { MarkdownView } from 'react-native-markdown-view';

const MarkdownViewer = ({link}) => {
  const [body, setBody] = useState('');
  useEffect(() => {
    if (link) {
      console.log('fetching request');
      fetch(`https://storage.googleapis.com/staging.agro-project-396117.appspot.com/${link}`).then(res => {
        console.log('res', res?._bodyText);
        setBody(res?._bodyText);
      });
    }
  }, [link]);

  return (
    <View style={{backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 10}}>
      <MarkdownView>
        {body}
      </MarkdownView>
    </View>
  );
};

export default MarkdownViewer;
