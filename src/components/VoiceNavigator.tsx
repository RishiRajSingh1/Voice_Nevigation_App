import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useVoiceRecognition from '@/lib/hooks/useVoiceRecognition';

const VoiceNavigator = () => {
  const router = useRouter();
  const { transcript, isListening, startListening, stopListening } = useVoiceRecognition();

  useEffect(() => {
    if (transcript) {
      const pageName = transcript.toLowerCase().trim();
      if (pageName === 'home') {
        router.push('/');
      } else if (pageName === 'about') {
        router.push('/about');
      } else if (pageName === 'contact') {
        router.push('/contact');
      } else {
        console.log('Unknown page:', pageName);
      }
    }
  }, [transcript, router]);

  return (
    <div className="p-4">
      <button
        onClick={isListening ? stopListening : startListening}
        className={`p-2 rounded ${
          isListening ? 'bg-red-500' : 'bg-blue-500'
        } text-white`}
      >
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <p className="mt-2">You said: {transcript}</p>
    </div>
  );
};

export default VoiceNavigator;