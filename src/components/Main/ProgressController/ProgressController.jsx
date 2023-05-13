import { ReactComponent as NextArrow} from "../../../assets/icons/right-arrow.svg"
import { ReactComponent as LastArrow } from "../../../assets/icons/left-arrow.svg"

export default function ProgressController() {
  return (
    <>
    {/*rogress-control*/}
      <section className="progress-control-container col col-lg-6 col-sm-12">
        <section className="button-group col col-12" data-phase="address">
          <button className="next">
            下一步
            <NextArrow className="cursor-point" />
          </button>
        </section>
        <section className="button-group col col-12" data-phase="shipping">
          <button className="prev">
            <LastArrow className="cursor-point" />
            上一步
          </button>
          <button className="next">
            下一步
            <NextArrow className="cursor-point" />
          </button>
        </section>
        <section className="button-group col col-12" data-phase="credit-card">
          <button className="prev">
            <LastArrow className="cursor-point" />
            上一步
          </button>
          <button className="next">
            確認下單
          </button>
        </section>
      </section>
    </>
  )
}