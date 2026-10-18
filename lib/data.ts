import { Activity, HeartPulse, Stethoscope, Thermometer, ClipboardList, HeartHandshake } from 'lucide-react';
export const clinic = {
 name:'Sri Venkateshwara Clinic | Physician', short:'Sri Venkateshwara Clinic',
 phone:'+91 93909 67667', tel:'+919390967667',
 address:'132/B, Behind Reliance Smart Bazar, Ruby Block, Kompally, Hyderabad, Telangana – 500100, India',
 mapQuery:'132/B Behind Reliance Smart Bazar Ruby Block Kompally Hyderabad Telangana 500100',
 rating:'4.9', reviews:82,
};
export const directions = 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(clinic.mapQuery);
export const services = [
 {slug:'general',title:'General Physician Consultation',short:'Discuss everyday health concerns with the clinic team.',long:'General physician consultations can help you discuss symptoms, health questions, and appropriate next steps.',icon:Stethoscope,ask:'Ask about a suitable consultation and any documents to bring.'},
 {slug:'diabetes',title:'Diabetes Care Enquiries',short:'Ask about diabetes-related physician consultations.',long:'People living with diabetes may need support to discuss blood sugar results, medicines and follow-up needs. Please confirm the clinic’s scope of care.',icon:Activity,ask:'Confirm whether diabetes-related consultation is available.'},
 {slug:'routine',title:'Routine Health Consultations',short:'Enquire about general health and routine check-ups.',long:'Routine appointments can be an opportunity to discuss your wellbeing, existing health concerns and whether any tests or referrals are appropriate.',icon:ClipboardList,ask:'Confirm consultation availability and whether any tests are offered.'},
 {slug:'blood-pressure',title:'Blood Pressure & Chronic Health',short:'Discuss longer-term health concerns and follow-up needs.',long:'Blood pressure and ongoing health questions may benefit from a qualified physician’s review. Availability and suitability must be confirmed.',icon:HeartPulse,ask:'Ask what prior readings or records would be useful.'},
 {slug:'common-illness',title:'Fever & Common Illness',short:'Enquire about coughs, colds, fever and similar concerns.',long:'A physician can assess common symptoms and advise on appropriate care where available. Severe or urgent symptoms require emergency attention.',icon:Thermometer,ask:'Check if the clinic can accommodate your symptoms and timing.'},
 {slug:'follow-up',title:'Follow-up Consultations',short:'Enquire about returning for a follow-up visit.',long:'Follow-up conversations may help review how you are feeling and next steps previously discussed with a doctor.',icon:HeartHandshake,ask:'Confirm the clinician’s availability and bring relevant records.'},
];
export const testimonials = ['Good experience d Doctor specilly in diabetes treatment','I highly recommend this hospital to anyone looking for quality healthcare.','The staff are professional and courteous, ensuring a smooth check-in process.'];
export const faq = [
 ['Where is Sri Venkateshwara Clinic located?',`We are at ${clinic.address}`],
 ['How can I book a physician consultation?',`Call ${clinic.phone} or send an appointment enquiry. The team will need to confirm availability.`],
 ['What is the clinic’s contact number?',clinic.phone],
 ['Does the clinic handle diabetes-related consultations?','Diabetes treatment has been mentioned in patient feedback. Please call to confirm whether your specific consultation can be accommodated.'],
 ['What are the consultation hours?','Please call the clinic to confirm current consultation timings; online listings may differ.'],
 ['Is the clinic near Reliance Smart Bazar?','Yes. The listed location is behind Reliance Smart Bazar, Ruby Block, Kompally.'],
 ['Can I visit without a prior appointment?','Please call to ask about walk-in availability before visiting.'],
 ['How can I get directions?','Use the Get Directions button to open the clinic location in Google Maps.'],
];
