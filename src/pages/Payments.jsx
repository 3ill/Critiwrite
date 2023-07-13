import React from 'react'
import { useState } from 'react';
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";

const Payment = ({name, email, phone}) => {

	const [accepted, setAccepted] = useState(false);

  const handleAcceptance = () => {
    setAccepted(!accepted);
  };

  const publicKey = "pk_live_76dad547a4de80cceec83aa601079dfbd1fcce0a"
  const amount = 137400
  
  const navigate = useNavigate();
  const success =async ()=>{
    navigate('/');
  }

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      success(),
    onClose: () => alert("Wait! Don't leave :("),
  }

	return(
		<div className='flex flex-col justify-center align-center'>
			<div className='max-w-[95%] w-full p-4 m-4 text-[black] bg-[#d1dbde] shadow-lg rounded'>
				<div className='text-sm h-[300px] overflow-y-scroll'>
					<h2 className='text-lg text-[#167396] text-center font-bold mb-4'>Terms of Service</h2>

				<p className='text-left text-[blue] font-serif'>Please read these Terms of Service ("Terms") carefully before using CritiWrite's essay evaluation service ("Service"). By accessing or using the Service, you agree to be bound by these Terms.</p>
				<p className='text-[15px] font-bold font-serif'> 1. Evaluation Service:</p>
				    
				    CritiWrite provides essay evaluation and feedback services for educational and exam preparation purposes. The evaluation is based on the official rubrics of exams such as IELTS, TOEFL, GRE, and SAT.
				    
				<p className='text-[15px] font-bold font-serif'> 2. User Obligations:</p>
				    
				    Users are responsible for submitting their own original work for evaluation. Hence, users must ensure that the submitted essays comply with ethical standards, plagiarism guidelines, and copyright laws.
				    
				<p className='text-[15px] font-bold font-serif'>3. Payment:</p>
				    
				    Payment for the evaluation service is required prior to the evaluation process.
				    
				<p className='text-[15px] font-bold font-serif'>4. Privacy and Confidentiality:</p>
				    
				    CritiWrite respects your privacy and handles your personal information with utmost confidentiality. Please refer to our Privacy Policy for detailed information.
				    
				    <p className='text-[15px] font-bold font-serif'>5. Feedback and Suggestions:</p>
				    
				    Any feedback, suggestions, or ideas provided by users regarding the Service may be used by CritiWrite to enhance and improve the Service without any obligation or compensation.
				    
				<p className='text-[15px] font-bold font-serif'>6. Limitation of Liability:</p>
				    
				    CritiWrite and its evaluators strive to provide accurate and valuable feedback. However, we do not guarantee specific outcomes or results from using the Service. Users assume full responsibility for their decisions and actions based on the feedback received.
				    
				<p className='text-[15px] font-bold font-serif'>7. Intellectual Property:</p>
				    
				    The Service, including its content, logo, and design, is protected by intellectual property rights. Users are prohibited from using, modifying, or distributing any part of the Service without prior written consent from CritiWrite.
				    
				<p className='text-[15px] font-bold font-serif'>8. Termination:</p>
				    
				    CritiWrite reserves the right to suspend or terminate access to the Service, without prior notice, for any violation of these Terms or any unauthorized use of the Service.
				    
				<p className='text-[15px] font-bold font-serif'>9. Modifications:</p>
				    
				    CritiWrite reserves the right to modify or revise these Terms at any time. The updated Terms will be effective upon posting on the website. Users are encouraged to review the Terms periodically.

				   <p className='font-bold font-serif'> By accessing or using the Service, you acknowledge that you have read, understood, and agreed to these Terms of Service. If you do not agree with any part of these Terms, please refrain from using the Service.</p>
				   
				    <div className="mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={accepted}
              onChange={handleAcceptance}
              className="form-checkbox"
            />
            <span className="ml-2 text-sm">
              I accept the Terms and Conditions
            </span>
          </label>
        </div>
				</div>
			</div>

			<div className='justify-center align-center text-center'>
			{accepted ? (
								 <PaystackButton {...componentProps} 
				 className='text-[16px] font-bold text-[#1f1e20] rounded-[25px] min-w-[170px] p-3 bg-[#167396]'/>
			):(
			<button className='text-[16px] font-bold text-[#1f1e20] rounded-[25px] min-w-[170px] p-3 bg-[#d1dbde]'>Pay Now</button>
			)
			}
			</div>
		</div>
	)
}

export default Payment