import styled from 'styled-components';
import VoiceChannel from '../../../components/voiceChannel/VoiceChannel';
import VoiceChannelUi from '../../../components/voiceChannel/VocieChannelUi';

export default function Channel() {
  return (
    <Area>
      {/* <VoiceChannel/> */}
      <VoiceChannelUi />
    </Area>
  );
}

const Area = styled.section`
  width: 100%;
  height: 100vh;

  background-color: #ffffff;
`;
