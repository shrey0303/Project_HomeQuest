import { useEffect } from 'react'
import styled from 'styled-components';

const ChatbotWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 400px; /* Adjust width as necessary */
  height: 600px; /* Adjust height as necessary */
  z-index: 9999 ;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    transform: none;
}
`;

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      (window as any).botpressWebChat.init({
        botName: 'SaHaYak',
        containerWidth: '100%25',
        layoutWidth: '100%25',
        enableConversationDeletion: 'true',
        composerPlaceholder: 'Ask Something...',
        botId: 'b735fc47-fc2e-4d78-b074-56dd1babb9d1',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'b735fc47-fc2e-4d78-b074-56dd1babb9d1',
        stylesheet: 'https://webchat-styler-css.botpress.app/prod/dd4440e2-e6f7-45c5-8146-79bc9215750f/v42763/style.css'
      })
      
      
    }
  }, [])

  return <ChatbotWrapper id="webchat" />
}

export default Chatbot