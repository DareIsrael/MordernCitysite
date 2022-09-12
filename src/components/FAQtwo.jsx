import React, {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";


function FAQtwo () {
    useEffect(() => {
        AOS.init({duration: 2000 });
        AOS.refresh();
      }, []);

    return (
         <div data-aos="fade-up"  className="faq0">
         <h2>Frequently Asked Questions</h2>
          <div className="faq1">
           
           <div data-aos="fade-right" className="faq2">
              <div className="faq3">
                  <h2>How long does it take to buy a home?</h2>
                  <p>Regardless of the buying conditions: outright payment or subscribing to our payment plan, this process takes 2 to 3 days. We are not accustomed to creating unnecessary delays. We value your time.</p>
              </div>
           </div>
           <div data-aos="fade-left" className="faq2">
              <div className="faq3">
                 <h2> How much do I need for an initial deposit?</h2>
                  <p>In a bid to ensure that nothing holds you back from purchasing your dream home, our average initial deposit sits around 20 to 30%.</p>
              </div>
           </div>
           <div data-aos="fade-up" className="faq2">
              <div className="faq3">
                  <h2>Do I need collateral if I am subscribing to the 30-month payment plan?</h2>
                  <p>No.</p>
              </div>
           </div>
           <div data-aos="fade-right" className="faq2">
              <div className="faq3">
                  <h2>What documents should I expect to get at the point of purchase?</h2>
                  <p>This depends on the buying condition. We will provide the Title documents if you are making an outright payment. However, if you subscribe to the payment plan, we would be providing Sales Contract.</p>
              </div>
           </div>
           <div data-aos="fade-left" className="faq2">
              <div className="faq3">
                  <h2>Are there additional charges besides paying for the house?</h2>
                  <p>There will be a 3% Legal fee charged to be paid alongside initial deposit..</p>
              </div>
           </div>
           <div data-aos="fade-up" className="faq2">
              <div className="faq3">
                  <h2>Can I rent out my house after making an outright payment?</h2>
                  <p>YES.</p>
              </div>
           </div>
        </div>


         </div>
          
    )
}

export default FAQtwo;