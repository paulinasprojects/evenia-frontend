import classNames from "@/lib/utils";
import "@/styles/progress-bar.scss";


const steps = [
  { name: '1', href: '#', status: 'complete' },
  { name: '2', href: '#', status: 'upcoming' },
  { name: '3', href: '#', status: 'upcoming' },
  { name: '4', href: '#', status: 'upcoming' },
]



const ProgressBar = () => {
  return (
    <nav aria-label="Progress">
       <ol role="list" className="progress-order-list">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? "progress-list": "", "position-relative")}>
            {step.status === "complete" ? (
              <>
              <div className="completed-list" aria-hidden="true">
                <div className="complete-list"/>
              </div>
              <a href="#" className="anchor-list">
                <span className="step-name">{step.name}</span>
              </a>
              </>
            ): (
              <>
                <div className="upcoming-list" aria-hidden="true">
                  <div className="upcoming-div"/>
                </div>
                <a href="#" className="upcoming-anchor">
                  <span className="upcoming-span" aria-hidden="true">{step.name}</span>
                </a>
              </>
            )}
          </li>
        ))}  
      </ol> 
    </nav>
  )
}

export default ProgressBar