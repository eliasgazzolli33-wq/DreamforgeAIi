import { useSearchParams } from "next/navigation";

export default function Success(){
  const params = useSearchParams();
  const session = params.get("session_id");
  return (
    <div style={{padding:40,fontFamily:"Inter, sans-serif",textAlign:"center"}}>
      <h1 style={{fontSize:24}}>Payment successful ✅</h1>
      <p style={{color:"#6b7280"}}>Thank you! Your downloads are below.</p>

      <div style={{marginTop:20}}>
        <a href="/downloads/ai-prompts-500.zip" style={{padding:"10px 18px",background:"#0b1220",color:"#fff",borderRadius:8,textDecoration:"none"}}>Download: Example pack</a>
      </div>

      <p style={{color:"#9ca3af", marginTop:16, fontSize:12}}>Session: {session}</p>
    </div>
  )
}
