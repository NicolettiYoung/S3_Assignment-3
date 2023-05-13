import Register from "./Register/Register";
import PrgressController from "./PrgressController/ProgressController"

export default function Main() {
  return (
    <>
       <main class="site-main">
        <div class="main-container">
          <Register/>
          <PrgressController/>

        </div>
      </main>
    </>
  )
}