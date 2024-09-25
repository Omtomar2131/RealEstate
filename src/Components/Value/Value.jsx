import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from '../../utils/accordion';
import { useState } from "react";

const Value = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleAccordionChange = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="v-wrapper">
            <div className="paddings  flexCenter v-container">
                <div className="v-left">
                    <div className="image-container">
                        <img src="/value.png" alt="Value Illustration" />
                    </div>
                </div>
                <div className=" v-right">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value We Give to You</span>
                    <span className="secondaryText">
                        We are always ready to help by providing the best services for you.
                        <br />
                        We believe a good place to live can make your life better.
                    </span>

                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                        style={{ border: 'none', marginTop: '2rem' }}
                    >
                        {data.map((item, index) => (
                            <AccordionItem
                                key={index}
                                uuid={index}
                                className={`accordionitem ${expandedIndex === index ? 'expanded' : ''}`}
                            >
                                <AccordionItemHeading>
                                    <AccordionItemButton 
                                        className="accordionbutton" 
                                        onClick={() => handleAccordionChange(index)}
                                    >
                                        <div className="accordion-header">
                                            <div className="flexCenter icon">
                                                {item.icon}
                                            </div>
                                            <span className=" centeredText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">
                                        {item.detail}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Value;
