import React from 'react';
import './css/Services.css'; 
import Carousals from "./Carousals";
const Services = () => {
    return (
        <div className="services-container">
            <div className="crsl zoom-in">
            <Carousals/>
            </div>
            <h1 className="services-title">Our Services</h1>

            <div className="services-section">
                <h2>General Medicine</h2>
                <p>
                    Our General Medicine department serves as the cornerstone of primary healthcare at Amazecare Hospital. 
                    Our experienced physicians offer comprehensive care for adults and seniors, addressing a wide range of acute and chronic health conditions. 
                    From preventive health screenings and routine check-ups to the management of complex medical cases, we ensure that every patient receives the best possible care and attention. 
                    Our team emphasizes patient education, lifestyle modifications, and evidence-based treatments to promote overall health and well-being.
                </p>
            </div>

            <div className="services-section">
                <h2>Pediatrics</h2>
                <p>
                    The Pediatrics department at Amazecare Hospital specializes in the health and development of infants, children, and adolescents. 
                    Our dedicated pediatricians provide vaccinations, growth and developmental assessments, and treatment for childhood illnesses. 
                    We believe in creating a welcoming environment for both children and their families, ensuring that every visit is comfortable and stress-free. 
                    From newborn care to adolescent health, our pediatricians focus on preventive care and early diagnosis to support your child’s healthy growth.
                </p>
            </div>

            <div className="services-section">
                <h2>Emergency Services</h2>
                <p>
                    Our Emergency Department is open 24/7 to provide immediate and urgent care for medical emergencies. 
                    Our skilled emergency physicians, nurses, and support staff are equipped to handle a variety of critical conditions, including trauma, heart attacks, strokes, and severe injuries. 
                    We prioritize rapid diagnosis and treatment to ensure the best possible outcomes for our patients. With state-of-the-art facilities and access to specialists, we are prepared to address any emergency with precision and efficiency.
                </p>
            </div>

            <div className="services-section">
                <h2>Surgery</h2>
                <p>
                    Amazecare Hospital offers a wide range of surgical services, including general, orthopedic, and minimally invasive procedures. 
                    Our surgical team comprises highly trained surgeons, anesthesiologists, and support staff who work collaboratively to deliver safe and effective surgical care. 
                    We employ the latest technologies and techniques to ensure patient safety, reduce recovery time, and achieve optimal surgical outcomes.
                </p>
            </div>

            <div className="services-section">
                <h2>Maternity and Obstetrics</h2>
                <p>
                    Our Maternity and Obstetrics department provides comprehensive care for expectant mothers, from prenatal to postpartum support. 
                    Our experienced obstetricians and nursing staff are committed to ensuring a healthy pregnancy and safe delivery. 
                    We offer personalized birthing plans, prenatal screenings, and education to help mothers and families prepare for the arrival of their new baby. 
                    With state-of-the-art labor and delivery suites, we strive to create a comfortable and supportive environment for every birth experience.
                </p>
            </div>

            <div className="services-section">
                <h2>Diagnostics and Imaging</h2>
                <p>
                    Amazecare Hospital is equipped with advanced diagnostic and imaging facilities, including MRI, CT scans, X-rays, and ultrasound. 
                    Our skilled radiologists and technicians ensure that every diagnostic procedure is performed with precision and accuracy. 
                    We provide timely and detailed reports to assist in the diagnosis and treatment of various medical conditions, enabling our physicians to deliver comprehensive and effective care.
                </p>
            </div>

            <div className="services-section">
                <h2>Cardiology</h2>
                <p>
                    Our Cardiology department offers specialized care for patients with heart-related conditions. 
                    From routine heart check-ups and stress tests to advanced interventional procedures, our team of experienced cardiologists is dedicated to providing the highest level of cardiac care. 
                    We emphasize preventive cardiology and work closely with patients to manage risk factors and promote heart health through lifestyle changes, medication, and interventional therapies.
                </p>
            </div>

            <div className="services-section">
                <h2>Rehabilitation Services</h2>
                <p>
                    Our Rehabilitation Services include physical therapy, occupational therapy, and speech therapy to support patients recovering from injury, surgery, or chronic conditions. 
                    Our licensed therapists develop individualized treatment plans to help patients regain strength, mobility, and independence. 
                    We use a variety of therapeutic techniques and exercises to promote recovery and improve quality of life.
                </p>
            </div>
        </div>
    );
};
export default Services;
