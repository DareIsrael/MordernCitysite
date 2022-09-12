import React, {useEffect} from "react"
import Heading from "./Heading"
import LocationCard from "./LocationCard";
import AOS from "aos";
import "aos/dist/aos.css";

function Location () {
    useEffect(() => {
        AOS.init({duration: 2000 });
        AOS.refresh();
      }, []);

    return (
        

        <section data-aos="fade-up" className="grid8">
        <div className="location">
        <Heading 
          title="Explore By Location "
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
         />
         <div className="locGrid">
         <LocationCard 
            img="photos/nigeria.jpg"
            body="Nigeria"
            Label="Stroll" 
         />
         <LocationCard
          img="photos/paris.jpg"
          body ="Paris"
          link = "https://www.green-acres.fr/property-for-sale/paris?gclid=EAIaIQobChMIu4z08faL-gIVDuR3Ch1RmQuEEAAYAiAAEgJY7fD_BwE "
          Label="Check out"
         
          />
          <LocationCard
          img="photos/spain.jpg"
          body ="Spain"
          link="https://www.antaresbarcelona.com/?utm_source=google&utm_medium=cpc&utm_campaign=AntaresPPCEuro&https%3A%2F%2Fwww_antaresbarcelona_com%2Fcontact-us%2F%3Futm_source=google&gclid=EAIaIQobChMIh724sPmL-gIVq49oCR2igg7VEAAYASAAEgL2g_D_BwE "
          Label="Stroll"
          />

          <LocationCard
          img="photos/uk.jpg"
          body ="United Kingdom"
          link= " https://manningstainton.co.uk/personal-valuation?gclid=EAIaIQobChMIxNah5PmL-gIVlfdRCh3QxgWVEAAYASAAEgJJGPD_BwE&gclsrc=aw.ds"
          Label="Check out"
          />
          <LocationCard
          img="photos/england.jpg"
          body ="China"
          link= "https://property.hk/eng/property_search.php?bldg=&prop=&isphoto=&greenform=&page=&e=&y=&pt=A&dt=HMA%2CHMH%2CHS%2CHPF%2CHWB&loc=1&saleType=2&sizeType=2&rent1=&rent2=&price1=&price2=&priceselect=&rentselect=&roomselect=&room1=&room2=&size1=&size2=&sizeselect=&year1=&year2=&yearselect=&owner=&sort=&adgroupid=123435876673&targetid=kwd-304339347255&gclid=EAIaIQobChMIi9jMw_qL-gIVy513Ch3w-wCcEAAYASAAEgKquvD_BwE "
          Label="Stroll"
          />
          <LocationCard
          img="photos/location1.jpg"
          body ="South Africa"
          link = "https://m-t.co.za/property/southdowns-estate-the-paddocks-sales/?gclid=EAIaIQobChMIkOao8PqL-gIV541oCR0SqQyUEAAYAyAAEgKyevD_BwE "
          Label="Check out"
          />

         </div>

        </div>

        </section>
    )
}
export default Location;


