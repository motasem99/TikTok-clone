import './App.css';
import Video from './components/VideoApp/Video.jsx';

function App() {
  return (
    <div className='app'>
      <div className='app__videos'>
        <Video
          url='https://v58.tiktokcdn.com/video/tos/useast2a/tos-useast2a-ve-0068c001/d83ba6b35b524d46aa2342cefea05a1e/?VExpiration=1613577698&VSignature=sGMhMkwMah_RVckVaND0mQ&a=1233&br=4122&bt=2061&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202102171001270101151510571E5F4D15&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=anNobzo5dXA0MzMzODczM0ApaDdpNGk5ZTs1N2g2N2g4PGdnNWlecGVzZGpgLS0tMTZzc2MuY2FgMl9jXzBhNWExLzA6Yw%3D%3D&vl=&vr='
          channel='MutasemKwaik'
          description='wow this is amazing song'
          song='شقلطوني في بحر بيرة'
          likes='123'
          messages='255'
          shares='23'
        />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
