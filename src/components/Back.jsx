import { ArrowLeftIcon } from "lucide-react"
export default function Back(){
  function goBack(){
    window.history.back();
  }
  return(
    <>
    <div className="fixed bottom-8 right-4 rounded-full w-16 h-16 aspect-square z-[99999] bg-primary">
      <button onClick={goBack}>
        <ArrowLeftIcon className="w-10 h-10 m-3 text-white"/>
      </button>
    </div>
    </>
  )
}