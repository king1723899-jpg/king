
// import useDeposit from '../../_hooks/useDeposit'
// import PaymentQRCode from '../../components/PaymentQRCode'
// import './deposit.css'
// import { toast } from 'react-toastify'
// import { useState, useMemo } from 'react'

// const Deposit = () => {
//   const {
//     register,
//     handleSubmit,
//     amount,
//     handleChange,
//     onSubmit,
//     bankUpiLists,
//     handleUploadedFile,
//     preview,
//     generateTransactionId,
//     handleUploadedUTR
//   } = useDeposit()

//   // New state for UI flow
//   const [currentStep, setCurrentStep] = useState<'selection' | 'details'>('selection')
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'bank' | 'upi' | 'crypto' | 'whatsapp'>('bank')
//   const [selectedOption, setSelectedOption] = useState<1 | 2 | 3>(1)
//   const [selectedBonusType, setSelectedBonusType] = useState('FTD 500% Bonus')
//   const [customAmount, setCustomAmount] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const [selectedCurrency, setSelectedCurrency] = useState('INR')
// // console.log(bankUpiLists, "innnnnn");

//   // Get the selected option data based on selectedOption
//   const selectedOptionData = useMemo(() => {
//     if (
//       !bankUpiLists?.data?.settings ||
//       !Array.isArray(bankUpiLists.data.settings) ||
//       !bankUpiLists.data.settings[0]
//     ) return null;
//     const settingsObj = bankUpiLists.data.settings[0];
//     switch (selectedOption) {
//       case 1:
//         return settingsObj.option1 || null;
//       case 2:
//         return settingsObj.option2 || null;
//       case 3:
//         return settingsObj.option3 || null;
//       default:
//         return settingsObj.option1 || null;
//     }
//   }, [bankUpiLists, selectedOption]);
// // console.log('selectedOptionData', selectedOptionData);

//   // Defensive: fallback to empty string if selectedOptionData is null
//   const getDetail = (key: keyof typeof selectedOptionData) => selectedOptionData && selectedOptionData[key] ? selectedOptionData[key] : '';

//   const copytoclipboard = (code: string) => {
//     const textArea = document.createElement("textarea");
//     textArea.style.position = 'fixed';
//     textArea.style.top = "0";
//     textArea.style.left = "0";
//     textArea.style.width = '2em';
//     textArea.style.height = '2em';
//     textArea.style.padding = "0";
//     textArea.style.border = 'none';
//     textArea.style.outline = 'none';
//     textArea.style.boxShadow = 'none';
//     textArea.style.background = 'transparent';
//     textArea.value = code;
//     document.body.appendChild(textArea);
//     textArea.select();
//     try {
//       const successful = document.execCommand('copy');
//       const msg = successful ? 'successful' : 'unsuccessful';
//       toast.success("Copied successfully")
//     } catch (err) {
//       console.log('Oops, unable to copy');
//     }
//     document.body.removeChild(textArea);
//   }

//   // Amount selection values
//   const amountOptions = [500, 1000, 5000, 10000, 25000, 50000, 100000, 500000];

//   const handleAmountClick = (value: number) => {
//     setCustomAmount(value.toString());
//     // Update the existing amount handler with proper event object
//     const event = {
//       target: { value: value.toString() },
//       preventDefault: () => {},
//       currentTarget: { value: value.toString() }
//     } as any;
//     handleChange(event);
//   };

//   const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCustomAmount(e.target.value);
//     handleChange(e);
//   }

//   const handleNext = () => {
//     if (!amount || amount <= 0) {
//       toast.error("Please enter a valid amount");
//       return;
//     }
//     if (selectedPaymentMethod === 'whatsapp') {
//       window.open(`https://wa.me/919229628842?text=Hi, I want to make a deposit of ₹${amount}`, '_blank');
//       return;
//     }
    
//     setIsLoading(true);
//     setTimeout(() => {
//       setCurrentStep('details');
//       setIsLoading(false);
//     }, 3000);
//   }

//   const handleBack = () => {
//     setCurrentStep('selection');
//   }

//   const clearAmount = () => {
//     setCustomAmount('');
//     const event = {
//       target: { value: '' },
//       preventDefault: () => {},
//       currentTarget: { value: '' }
//     } as any;
//     handleChange(event);
//   }

//   const handlePaymentMethodChange = (method: 'bank' | 'upi' | 'crypto' | 'whatsapp') => {
//     setSelectedPaymentMethod(method);
//     // Reset currency based on payment method
//     if (method === 'crypto') {
//       setSelectedCurrency('BTC');
//     } else {
//       setSelectedCurrency('INR');
//     }
//   }

//   const getCurrencyOptions = () => {
//     if (selectedPaymentMethod === 'crypto') {
//       return [
//         { value: 'BTC', label: 'BTC' },
//         { value: 'USDT_TRC20', label: 'USDT (TRC20)' },
//         { value: 'USDT_ERC20', label: 'USDT (ERC20)' }
//       ];
//     }
//     return [{ value: 'INR', label: 'INR' }];
//   }

//   if (currentStep === 'selection') {
//     return (
//       <div className='new-deposit-interface deposit-container'>
//         <div className='deposit-header'>
//           <div className='deposit-header-content'>
//             <div className='deposit-icon'>
//               <i className='fas fa-credit-card'></i>
//             </div>
//             <h2>DEPOSIT</h2>
//           </div>
//           <p className='deposit-subtitle'>Please Select Deposit Method:</p>
//         </div>

//         <div className='deposit-disclaimer'>
//           <p>Disclaimer: For faster and more reliable payments, please use the bank transfer option.</p>
//         </div>

//                  {/* Payment Method Selection */}
//          <div className='payment-methods'>
//            <button 
//              className={`payment-method-btn ${selectedPaymentMethod === 'bank' ? 'active' : ''}`}
//              onClick={() => handlePaymentMethodChange('bank')}
//            >
//             <i className='fas fa-university'></i>
//              BANK (5% BONUS)
//            </button>
//            <button 
//              className={`payment-method-btn ${selectedPaymentMethod === 'upi' ? 'active' : ''}`}
//              onClick={() => handlePaymentMethodChange('upi')}
//            >
//              <i className='fas fa-mobile-alt'></i>
//              UPI
//            </button>
//            <button 
//              className={`payment-method-btn ${selectedPaymentMethod === 'crypto' ? 'active' : ''}`}
//              onClick={() => handlePaymentMethodChange('crypto')}
//            >
//             <i className='fab fa-bitcoin'></i>
//              CRYPTO
//            </button>
//            <button 
//              className={`payment-method-btn whatsapp ${selectedPaymentMethod === 'whatsapp' ? 'active' : ''}`}
//              onClick={() => handlePaymentMethodChange('whatsapp')}
//            >
//             <i className='fab fa-whatsapp'></i>
//              WHATSAPP DEPOSIT
//            </button>
//          </div>

//         {/* Options for Bank and UPI */}
//         {(selectedPaymentMethod === 'bank' || selectedPaymentMethod === 'upi') && (
//           <div className='payment-options'>
//             <button 
//               className={`option-btn ${selectedOption === 1 ? 'active' : ''}`}
//               onClick={() => setSelectedOption(1)}
//             >
//                <i className='fas fa-cog'></i>
//               OPTION 1
//             </button>
//             <button 
//               className={`option-btn ${selectedOption === 2 ? 'active' : ''}`}
//               onClick={() => setSelectedOption(2)}
//             >
//                <i className='fas fa-cog'></i>
//               OPTION 2
//             </button>
//             <button 
//               className={`option-btn ${selectedOption === 3 ? 'active' : ''}`}
//               onClick={() => setSelectedOption(3)}
//             >
//                <i className='fas fa-cog'></i>
//               OPTION 3
//             </button>
//           </div>
//         )}

//                  {/* Currency Selection */}
//          <div className='currency-selection'>
//            <label>Select Currency</label>
//            <select 
//              className='currency-select'
//              value={selectedCurrency}
//              onChange={(e) => setSelectedCurrency(e.target.value)}
//            >
//              {getCurrencyOptions().map((option) => (
//                <option key={option.value} value={option.value}>
//                  {option.label}
//                </option>
//              ))}
//            </select>
//          </div>

//          {/* Amount Selection */}
//          <div className='amount-selection'>
//            <div className='amount-grid'>
//              {amountOptions.map((option) => (
//                <button
//                  key={option}
//                  className={`amount-btn ${customAmount === option.toString() ? 'active' : ''}`}
//                  onClick={() => handleAmountClick(option)}
//                >
//                  +{option}
//                </button>
//              ))}
//            </div>
//          </div>

//         <div className='deposit-note'>
//           <p>Note: Please allow 30mins for deposit amount to credit, in case of any further delay reach out to customer care.</p>
//         </div>

//         {/* Amount Input */}
//         <div className='amount-input-container'>
//           <div className='amount-input-wrapper'>
//             <input 
//               type='number' 
//               placeholder='Enter Amount To Be Deposited'
//               className='amount-input'
//               value={customAmount}
//               {...register('amount')}
//               onChange={handleCustomAmountChange}
//             />
//             <button className='clear-btn' onClick={clearAmount}>Clear</button>
//           </div>
//         </div>

//                  {/* Next Button */}
//          <div className='next-button-container'>
//            <button 
//              className={`next-btn ${isLoading ? 'loading' : ''}`} 
//              onClick={handleNext}
//              disabled={isLoading}
//            >
//              {isLoading ? (
//                <>
//                  <i className='fas fa-spinner fa-spin'></i>
//                  <span>Loading...</span>
//                </>
//              ) : (
//                'Next'
//              )}
//            </button>
//          </div>
//       </div>
//     );
//   }

//   // Details Step (existing functionality)
//   return (
//     <div className='new-deposit-interface deposit-container'>
//       {/* Back Button */}
//       <div className='deposit-header'>
//         <button className='back-btn' onClick={handleBack}>
//           <i className='fas fa-arrow-left'></i> Back
//         </button>
//         <div className='success-indicator'>
//           <i className='fas fa-check-circle'></i>
//           <span>Transaction Saved Successfully!</span>
//         </div>
//       </div>

//       <div className='deposit-header'>
//         <div className='deposit-header-content'>
//           <div className='deposit-icon'>
//             <i className='fas fa-credit-card'></i>
//           </div>
//           <h2>DEPOSIT</h2>
//         </div>
//         <p className='deposit-subtitle'>Please Select Deposit Method:</p>
//       </div>

//       <div className='deposit-disclaimer'>
//         <p>Disclaimer: For faster and more reliable payments, please use the bank transfer option.</p>
//       </div>

//       {/* Selected Payment Method Display */}
//       <div className='payment-methods'>
//         <button className={`payment-method-btn ${selectedPaymentMethod === 'bank' ? 'active' : ''}`}>
//         <i className='fas fa-university'></i>
//           BANK (5% BONUS)
//         </button>
//         <button className={`payment-method-btn ${selectedPaymentMethod === 'upi' ? 'active' : ''}`}>
//         <i className='fas fa-mobile-alt'></i>
//           UPI
//         </button>
//            <button className='payment-method-btn'>
//           <i className='fab fa-bitcoin'></i>
//           CRYPTO
//         </button>
//         <button className='payment-method-btn whatsapp'>
//           <i className='fab fa-whatsapp'></i>
//           WHATSAPP DEPOSIT
//         </button>
//       </div>

//       {/* Update the option buttons to set selectedOption */}
//       <div className='payment-options'>
//         <button className={`option-btn ${selectedOption === 1 ? 'active' : ''}`} onClick={() => setSelectedOption(1)}>
//           <i className='fas fa-cog'></i>
//           OPTION 1
//         </button>
//         <button className={`option-btn ${selectedOption === 2 ? 'active' : ''}`} onClick={() => setSelectedOption(2)}>
//           <i className='fas fa-cog'></i>
//           OPTION 2
//         </button>
//         <button className={`option-btn ${selectedOption === 3 ? 'active' : ''}`} onClick={() => setSelectedOption(3)}>
//           <i className='fas fa-cog'></i>
//           OPTION 3
//         </button>
//       </div>

//       <div className='deposit-note'>
//         <p>Note: Please allow 30mins for deposit amount to credit, in case of any further delay reach out to customer care.</p>
//       </div>

//              <div className='amount-input-container'>
//          <div className='amount-input-wrapper'>
//            <input 
//              type='number' 
//              placeholder='Enter Amount To Be Deposited'
//              className='amount-input'
//              value={amount || ''}
//              {...register('amount')}
//              onChange={handleChange}
//              readOnly
//            />
//            <button className='clear-btn' onClick={clearAmount}>Clear</button>
//          </div>
//        </div>

//       {/* Bonus Type Selection */}
//       <div className='bonus-selection'>
//         <label>Select Bonus type</label>
//         <select 
//           className='bonus-select'
//           value={selectedBonusType}
//           onChange={(e) => setSelectedBonusType(e.target.value)}
//         >
//           <option value="FTD 500% Bonus">FTD 500% Bonus</option>
//         </select>
//       </div>

//              {/* Payment Details based on selected method */}
//        <form onSubmit={handleSubmit(onSubmit)}>
//          {selectedPaymentMethod === 'bank' && (
//            <div className='payment-details-section'>
//              <h3>Account Details</h3>
//              <div className='account-details'>
//                <div className='detail-item'>
//                  <label>Account Holder Name:</label>
//                  <div className='detail-value'>
//                    <span>{getDetail('accountHolderName')}</span>
//                    <button type="button" className='copy-btn' onClick={() => copytoclipboard(getDetail('accountHolderName'))}>
//                      <i className='fas fa-copy'></i>
//                    </button>
//                  </div>
//                </div>
//                <div className='detail-item'>
//                  <label>Account Holder Number:</label>
//                  <div className='detail-value'>
//                    <span>{getDetail('bankAccountNumber')}</span>
//                    <button type="button" className='copy-btn' onClick={() => copytoclipboard(getDetail('bankAccountNumber'))}>
//                      <i className='fas fa-copy'></i>
//                    </button>
//                  </div>
//                </div>
//                <div className='detail-item'>
//                  <label>Account IFSC Code:</label>
//                  <div className='detail-value'>
//                    <span>{getDetail('ifscCode')}</span>
//                    <button type="button" className='copy-btn' onClick={() => copytoclipboard(getDetail('ifscCode'))}>
//                      <i className='fas fa-copy'></i>
//                    </button>
//                  </div>
//                </div>
//                <div className='detail-item'>
//                  <label>Bank Name:</label>
//                  <div className='detail-value'>
//                    <span>{getDetail('bankName')}</span>
//                    <button type="button" className='copy-btn' onClick={() => copytoclipboard(getDetail('bankName'))}>
//                      <i className='fas fa-copy'></i>
//                    </button>
//                  </div>
//                </div>
//              </div>

//              <div className='utr-input'>
//                <input 
//                  type="text" 
//                  className='form-control' 
//                  placeholder='Enter Reference ID/UTR (Re-Verify For Correctness)'
//                  {...register('utrno')}
//                  value={preview.type === 'bank' ? preview.utrno : ""}
//                  onChange={(e) => handleUploadedUTR(e, 'bank')}
//                />
//              </div>

//              <div className='payment-types'>
//                <div className='payment-type-options'>
//                  <label>
//                    <input type="radio" name="paymentType" value="IMPS" defaultChecked />
//                    <span className='radio-btn active'>IMPS</span>
//                  </label>
//                  <label>
//                    <input type="radio" name="paymentType" value="NEFT" />
//                    <span className='radio-btn'>NEFT</span>
//                  </label>
//                  <label>
//                    <input type="radio" name="paymentType" value="RTGS" />
//                    <span className='radio-btn'>RTGS</span>
//                  </label>
//                </div>
//              </div>

//              <div className='upload-section'>
//                <input
//                  type='file'
//                  id='upload-bank'
//                  hidden
//                  accept='image/png, image/jpg, image/jpeg'
//                  {...register('imageUrl')}
//                  onChange={(e) => handleUploadedFile(e, 'bank')}
//                />
//                <label htmlFor='upload-bank' className='upload-btn'>
//                  UPLOAD IMAGE
//                </label>
//                <button
//                  className={`confirm-btn ${preview?.imagePath && preview?.type === 'bank' ? 'active' : 'disabled'}`}
//                  type='submit'
//                  disabled={!preview?.imagePath || preview?.type !== 'bank'}
//                >
//                  Confirm Payment
//                </button>
//              </div>
//            </div>
//          )}

//          {selectedPaymentMethod === 'crypto' && (
//            <div className='payment-details-section'>
//              <h3>Crypto Payment Details</h3>
//              <div className='crypto-info'>
//                <div className='detail-item'>
//                  <label>Selected Currency:</label>
//                  <div className='detail-value'>
//                    <span>{selectedCurrency}</span>
//                  </div>
//                </div>
//                <div className='detail-item'>
//                  <label>Wallet Address:</label>
//                  <div className='detail-value'>
//                    <span>Will be provided based on currency selection</span>
//                    <button type="button" className='copy-btn' onClick={() => copytoclipboard('wallet-address-here')}>
//                      <i className='fas fa-copy'></i>
//                    </button>
//                  </div>
//                </div>
//              </div>

//              <div className='utr-input'>
//                <input 
//                  type="text" 
//                  className='form-control' 
//                  placeholder='Enter Transaction Hash'
//                  {...register('utrno')}
//                  value={preview.type === 'crypto' ? preview.utrno : ""}
//                  onChange={(e) => handleUploadedUTR(e, 'crypto')}
//                />
//              </div>

//              <div className='upload-section'>
//                <input
//                  type='file'
//                  id='upload-crypto'
//                  hidden
//                  accept='image/png, image/jpg, image/jpeg'
//                  {...register('imageUrl')}
//                  onChange={(e) => handleUploadedFile(e, 'crypto')}
//                />
//                <label htmlFor='upload-crypto' className='upload-btn'>
//                  UPLOAD IMAGE
//                </label>
//                <button
//                  className={`confirm-btn ${preview?.imagePath && preview?.type === 'crypto' ? 'active' : 'disabled'}`}
//                  type='submit'
//                  disabled={!preview?.imagePath || preview?.type !== 'crypto'}
//                >
//                  Confirm Payment
//                </button>
//              </div>
//            </div>
//          )}

//          {selectedPaymentMethod === 'upi' && (
//           <div className='payment-details-section'>
//             <div className='upi-payment-section'>
//               <div className='qr-section'>
//                 <p>If Payment declined due to Security Reasons, Please Scan this below Qr Code</p>
//                 <div className='qr-code-container'>
              
//                 </div>
//                 <div className='upi-id'>
//                   <label>UPI ID:</label>
//                   <div className='detail-value'>
//                     <span>{getDetail('upiId')}</span>
//                     <button type="button" className='copy-btn' onClick={() => copytoclipboard(getDetail('upiId'))}>
//                       <i className='fas fa-copy'></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className='utr-input'>
//                 <input 
//                   type="text" 
//                   className='form-control' 
//                   placeholder='Enter Reference ID/UTR'
//                   {...register('utrno')}
//                   value={preview.type === 'upi' ? preview.utrno : ""}
//                   onChange={(e) => handleUploadedUTR(e, 'upi')}
//                 />
//               </div>

//               <div className='upload-section'>
//                 <input
//                   type='file'
//                   id='upload-upi'
//                   hidden
//                   accept='image/png, image/jpg, image/jpeg'
//                   {...register('imageUrl')}
//                   onChange={(e) => handleUploadedFile(e, 'upi')}
//                 />
//                 <label htmlFor='upload-upi' className='upload-btn'>
//                   UPLOAD IMAGE
//                 </label>
//                 <button
//                   className={`confirm-btn ${preview?.imagePath && preview?.type === 'upi' ? 'active' : 'disabled'}`}
//                   type='submit'
//                   disabled={!preview?.imagePath || preview?.type !== 'upi'}
//                 >
//                   Confirm Payment
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }

// export default Deposit





import useDeposit from '../../_hooks/useDeposit'
import PaymentQRCode from '../../components/PaymentQRCode'
import './deposit.css'
import { toast } from 'react-toastify'
import { useState, useMemo } from 'react'
import { config } from '../../config/config'

const Deposit = () => {
  const {
    register,
    handleSubmit,
    amount,
    onError,
    handleChange,
    onSubmit,
    bankUpiLists,
    handleUploadedFile,
    preview,
    generateTransactionId,
    handleUploadedUTR
  } = useDeposit()

  // New state for UI flow
  const [currentStep, setCurrentStep] = useState<'selection' | 'details'>('selection')
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'bank' | 'upi' | 'crypto' | 'whatsapp'>('bank')
  const [selectedOption, setSelectedOption] = useState<1 | 2 | 3>(1)
  const [selectedBonusType, setSelectedBonusType] = useState('FTD 500% Bonus')
  const [customAmount, setCustomAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState('INR')
  // console.log(bankUpiLists, "innnnnn");

  // Get the selected option data based on selectedOption
  const selectedOptionData = useMemo(() => {
    if (
      !bankUpiLists?.data?.settings ||
      !Array.isArray(bankUpiLists.data.settings) ||
      !bankUpiLists.data.settings[0]
    ) return null;
    const settingsObj = bankUpiLists.data.settings[0];
    switch (selectedOption) {
      case 1:
        return settingsObj.option1 || null;
      case 2:
        return settingsObj.option2 || null;
      case 3:
        return settingsObj.option3 || null;
      default:
        return settingsObj.option1 || null;
    }
  }, [bankUpiLists, selectedOption]);
  // console.log('selectedOptionData', selectedOptionData);

  // Defensive: fallback to empty string if selectedOptionData is null
  const getDetail = (key: keyof typeof selectedOptionData) => {
    const value = selectedOptionData && selectedOptionData[key] ? selectedOptionData[key] : '';
    if (key === 'qrCodeImage') {
      console.log('QR Code Image Detail:', value);
      console.log('Selected Option Data:', selectedOptionData);
      // Fix Windows path separators for URL
      if (value && typeof value === 'string') {
        return value.replace(/\\/g, '/');
      }
    }
    return value;
  };

  const copytoclipboard = (code: string) => {
    const textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = "0";
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = code;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      toast.success("Copied successfully")
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
  }

  // Amount selection values
  const amountOptions = [500, 1000, 5000, 10000, 25000, 50000, 100000, 500000];

  const handleAmountClick = (value: number) => {
    setCustomAmount(value.toString());
    // Update the existing amount handler with proper event object
    const event = {
      target: { value: value.toString() },
      preventDefault: () => { },
      currentTarget: { value: value.toString() }
    } as any;
    handleChange(event);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    handleChange(e);
  }

  const handleNext = () => {
    if (!amount || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (selectedPaymentMethod === 'whatsapp') {
      window.open(`https://wa.me/1234567890?text=Hi, I want to make a deposit of ₹${amount}`, '_blank');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setCurrentStep('details');
      setIsLoading(false);
    }, 3000);
  }

  const handleBack = () => {
    setCurrentStep('selection');
  }

  const clearAmount = () => {
    setCustomAmount('');
    const event = {
      target: { value: '' },
      preventDefault: () => { },
      currentTarget: { value: '' }
    } as any;
    handleChange(event);
  }

  const handlePaymentMethodChange = (method: 'bank' | 'upi' | 'crypto' | 'whatsapp') => {
    setSelectedPaymentMethod(method);
    // Reset currency based on payment method
    if (method === 'crypto') {
      setSelectedCurrency('BTC');
    } else {
      setSelectedCurrency('INR');
    }
  }

  const getCurrencyOptions = () => {
    if (selectedPaymentMethod === 'crypto') {
      return [
        { value: 'BTC', label: 'BTC' },
        { value: 'USDT_TRC20', label: 'USDT (TRC20)' },
        { value: 'USDT_ERC20', label: 'USDT (ERC20)' }
      ];
    }
    return [{ value: 'INR', label: 'INR' }];
  }

  if (currentStep === 'selection') {
    return (
      <div className='new-deposit-interface deposit-container'>
        <div className='deposit-header'>
          <div className='deposit-header-content'>
            <div className='deposit-icon'>
              <i className='fas fa-credit-card'></i>
            </div>
            <h2>DEPOSIT</h2>
          </div>
          <p className='deposit-subtitle'>Please Select Deposit Method:</p>
        </div>

        <div className='deposit-disclaimer'>
          <p>Disclaimer: For faster and more reliable payments, please use the bank transfer option.</p>
        </div>

        {/* Payment Method Selection */}
        <div className='payment-methods'>
          <button
            className={`payment-method-btn ${selectedPaymentMethod === 'bank' ? 'active' : ''}`}
            onClick={() => handlePaymentMethodChange('bank')}
          >
            <i className='fas fa-university'></i>
            BANK
          </button>
          <button
            className={`payment-method-btn ${selectedPaymentMethod === 'upi' ? 'active' : ''}`}
            onClick={() => handlePaymentMethodChange('upi')}
          >
            <i className='fas fa-mobile-alt'></i>
            UPI
          </button>
          <button
            className={`payment-method-btn ${selectedPaymentMethod === 'crypto' ? 'active' : ''}`}
            onClick={() => handlePaymentMethodChange('crypto')}
          >
            <i className='fab fa-bitcoin'></i>
            CRYPTO
          </button>
          <button
            className={`payment-method-btn whatsapp ${selectedPaymentMethod === 'whatsapp' ? 'active' : ''}`}
            onClick={() => handlePaymentMethodChange('whatsapp')}
          >
            <i className='fab fa-whatsapp'></i>
            WHATSAPP DEPOSIT
          </button>
        </div>

        {/* Options for Bank and UPI */}
        {(selectedPaymentMethod === 'bank' || selectedPaymentMethod === 'upi') && (
          <div className='payment-options'>
            <button
              className={`option-btn ${selectedOption === 1 ? 'active' : ''}`}
              onClick={() => setSelectedOption(1)}
            >
              <i className={selectedPaymentMethod === 'bank' ? 'fas fa-university' : 'fas fa-mobile-alt'}></i>
              {selectedPaymentMethod === 'bank' ? 'BANK 1' : 'UPI 1'}
            </button>
            <button
              className={`option-btn ${selectedOption === 2 ? 'active' : ''}`}
              onClick={() => setSelectedOption(2)}
            >
              <i className={selectedPaymentMethod === 'bank' ? 'fas fa-university' : 'fas fa-mobile-alt'}></i>
              {selectedPaymentMethod === 'bank' ? 'BANK 2' : 'UPI 2'}
            </button>
            <button
              className={`option-btn ${selectedOption === 3 ? 'active' : ''}`}
              onClick={() => setSelectedOption(3)}
            >
               <i className={selectedPaymentMethod === 'bank' ? 'fas fa-university' : 'fas fa-mobile-alt'}></i>
              {selectedPaymentMethod === 'bank' ? 'BANK 3' : 'UPI 3'}
            </button>
          </div>
        )}

        {/* Currency Selection */}
        <div className='currency-selection'>
          <label>Select Currency</label>
          <select
            className='currency-select'
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            {getCurrencyOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Amount Selection */}
        <div className='amount-selection'>
          <div className='amount-grid'>
            {amountOptions.map((option) => (
              <button
                key={option}
                className={`amount-btn ${customAmount === option.toString() ? 'active' : ''}`}
                onClick={() => handleAmountClick(option)}
              >
                +{option}
              </button>
            ))}
          </div>
        </div>

        <div className='deposit-note'>
          <p>Note: Please allow 30mins for deposit amount to credit, in case of any further delay reach out to customer care.</p>
        </div>

        {/* Amount Input */}
        <div className='amount-input-container'>
          <div className='amount-input-wrapper'>
            <input
              type='number'
              placeholder='Enter Amount To Be Deposited'
              className='amount-input'
              value={customAmount}
              {...register('amount')}
              onChange={handleCustomAmountChange}
            />
            <button className='clear-btn' onClick={clearAmount}>Clear</button>
          </div>
        </div>

        {/* Next Button */}
        <div className='next-button-container'>
          <button
            className={`next-btn ${isLoading ? 'loading' : ''}`}
            onClick={handleNext}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className='fas fa-spinner fa-spin'></i>
                <span>Loading...</span>
              </>
            ) : (
              'Next'
            )}
          </button>
        </div>
      </div>
    );
  }

  // Details Step (existing functionality)
  return (
    <div className='new-deposit-interface deposit-container'>
      {/* Back Button */}
      <div className='deposit-header'>
        <button className='back-btn' onClick={handleBack}>
          <i className='fas fa-arrow-left'></i> Back
        </button>
        <div className='success-indicator'>
          <i className='fas fa-check-circle'></i>
          <span>Transaction Saved Successfully!</span>
        </div>
      </div>

      <div className='deposit-header'>
        <div className='deposit-header-content'>
          <div className='deposit-icon'>
            <i className='fas fa-credit-card'></i>
          </div>
          <h2>DEPOSIT</h2>
        </div>
        <p className='deposit-subtitle'>Please Select Deposit Method:</p>
      </div>

      <div className='deposit-disclaimer'>
        <p>Disclaimer: For faster and more reliable payments, please use the bank transfer option.</p>
      </div>

      {/* Selected Payment Method Display */}
      <div className='payment-methods'>
        <button className={`payment-method-btn ${selectedPaymentMethod === 'bank' ? 'active' : ''}`}>
          <i className='fas fa-university'></i>
          BANK 
        </button>
        <button className={`payment-method-btn ${selectedPaymentMethod === 'upi' ? 'active' : ''}`}>
          <i className='fas fa-mobile-alt'></i>
          UPI
        </button>
        <button className='payment-method-btn'>
          <i className='fab fa-bitcoin'></i>
          CRYPTO
        </button>
        <button className='payment-method-btn whatsapp'>
          <i className='fab fa-whatsapp'></i>
          WHATSAPP DEPOSIT
        </button>
      </div>

      {/* Update the option buttons to set selectedOption */}
      <div className='payment-options'>
        <button className={`option-btn ${selectedOption === 1 ? 'active' : ''}`} onClick={() => setSelectedOption(1)}>
          <i className={selectedPaymentMethod === 'bank' ? 'fas fa-university' : 'fas fa-mobile-alt'}></i>
          {selectedPaymentMethod === 'bank' ? 'BANK 1' : 'UPI 1'}
        </button>
        <button className={`option-btn ${selectedOption === 2 ? 'active' : ''}`} onClick={() => setSelectedOption(2)}>
          <i className={selectedPaymentMethod === 'bank' ? 'fas fa-university' : 'fas fa-mobile-alt'}></i>
          {selectedPaymentMethod === 'bank' ? 'BANK 2' : 'UPI 2'}
        </button>
        <button className={`option-btn ${selectedOption === 3 ? 'active' : ''}`} onClick={() => setSelectedOption(3)}>
          <i className={selectedPaymentMethod === 'bank' ? 'fas fa-university' : 'fas fa-mobile-alt'}></i>
          {selectedPaymentMethod === 'bank' ? 'BANK 3' : 'UPI 3'}
        </button>
      </div>

      <div className='deposit-note'>
        <p>Note: Please allow 30mins for deposit amount to credit, in case of any further delay reach out to customer care.</p>
      </div>

      <div className='amount-input-container'>
        <div className='amount-input-wrapper'>
          <input
            type='number'
            placeholder='Enter Amount To Be Deposited'
            className='amount-input'
            value={amount || ''}
            {...register('amount')}
            onChange={handleChange}
            readOnly
          />
          <button className='clear-btn' onClick={clearAmount}>Clear</button>
        </div>
      </div>

 {/* Bonus Type Selection */}
     {/* <div className='bonus-selection'>
        <label>Select Bonus type</label>
        <select
         className='bonus-select'
          value={selectedBonusType}
          onChange={(e) => setSelectedBonusType(e.target.value)}
        >
          <option value="FTD 500% Bonus">FTD 500% Bonus</option>
        </select>
      </div> */}

      {/* Payment Details based on selected method */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {selectedPaymentMethod === 'bank' && (
          <div className='payment-details-section'>
            <h3>Account Details</h3>
            <div className='account-details'>
              <div className='detail-item'>
                <label>Account Holder Name:</label>
                <div className='detail-value'>
                  <span>{getDetail('accountHolderName')}</span>
                  <button type="button" className='copy-btn' onClick={() => copytoclipboard(getDetail('accountHolderName'))}>
                    <i className='fas fa-copy'></i>
                  </button>
                </div>
              </div>
              <div className='detail-item'>
                <label>Account Holder Number:</label>
                <div className='detail-value'>
                  <span>{getDetail('bankAccountNumber')}</span>
                  <button type="button" className='copy-btn' onClick={() => copytoclipboard(getDetail('bankAccountNumber'))}>
                    <i className='fas fa-copy'></i>
                  </button>
                </div>
              </div>
              <div className='detail-item'>
                <label>Account IFSC Code:</label>
                <div className='detail-value'>
                  <span>{getDetail('ifscCode')}</span>
                  <button type="button" className='copy-btn' onClick={() => copytoclipboard(getDetail('ifscCode'))}>
                    <i className='fas fa-copy'></i>
                  </button>
                </div>
              </div>
              <div className='detail-item'>
                <label>Bank Name:</label>
                <div className='detail-value'>
                  <span>{getDetail('bankName')}</span>
                  <button type="button" className='copy-btn' onClick={() => copytoclipboard(getDetail('bankName'))}>
                    <i className='fas fa-copy'></i>
                  </button>
                </div>
              </div>
            </div>

            <div className='utr-input'>
              <input
                type="text"
                className='form-control'
                placeholder='Enter Reference ID/UTR (Re-Verify For Correctness)'
                {...register('utrno')}
                value={preview.type === 'bank' ? preview.utrno : ""}
                onChange={(e) => handleUploadedUTR(e, 'bank')}
              />
            </div>

            <div className='payment-types'>
              <div className='payment-type-options'>
                <label>
                  <input type="radio" name="paymentType" value="IMPS" defaultChecked />
                  <span className='radio-btn active'>IMPS</span>
                </label>
                <label>
                  <input type="radio" name="paymentType" value="NEFT" />
                  <span className='radio-btn'>NEFT</span>
                </label>
                <label>
                  <input type="radio" name="paymentType" value="RTGS" />
                  <span className='radio-btn'>RTGS</span>
                </label>
              </div>
            </div>

            <div className='upload-section'>
              <input
                type='file'
                id='upload-bank'
                hidden
                accept='image/png, image/jpg, image/jpeg'
                {...register('imageUrl')}
                onChange={(e) => handleUploadedFile(e, 'bank')}
              />
              <label htmlFor='upload-bank' className='upload-btn'>
                UPLOAD IMAGE
              </label>
              <button
                className={`confirm-btn ${preview?.imagePath && preview?.type === 'bank' ? 'active' : 'disabled'}`}
                type='submit'
                disabled={!preview?.imagePath || preview?.type !== 'bank'}
              >
                Confirm Payment
              </button>
            </div>
          </div>
        )}

        {selectedPaymentMethod === 'crypto' && (
          <div className='payment-details-section'>
            <h3>Crypto Payment Details</h3>
            <div className='crypto-info'>
              <div className='detail-item'>
                <label>Selected Currency:</label>
                <div className='detail-value'>
                  <span>{selectedCurrency}</span>
                </div>
              </div>
              <div className='detail-item'>
                <label>Wallet Address:</label>
                <div className='detail-value'>
                  <span>Will be provided based on currency selection</span>
                  <button type="button" className='copy-btn' onClick={() => copytoclipboard('wallet-address-here')}>
                    <i className='fas fa-copy'></i>
                  </button>
                </div>
              </div>
            </div>

            <div className='utr-input'>
              <input
                type="text"
                className='form-control'
                placeholder='Enter Transaction Hash'
                {...register('utrno')}
                value={preview.type === 'crypto' ? preview.utrno : ""}
                onChange={(e) => handleUploadedUTR(e, 'crypto')}
              />
            </div>

            <div className='upload-section'>
              <input
                type='file'
                id='upload-crypto'
                hidden
                accept='image/png, image/jpg, image/jpeg'
                {...register('imageUrl')}
                onChange={(e) => handleUploadedFile(e, 'crypto')}
              />
              <label htmlFor='upload-crypto' className='upload-btn'>
                UPLOAD IMAGE
              </label>
              <button
                className={`confirm-btn ${preview?.imagePath && preview?.type === 'crypto' ? 'active' : 'disabled'}`}
                type='submit'
                disabled={!preview?.imagePath || preview?.type !== 'crypto'}
              >
                Confirm Payment
              </button>
            </div>
          </div>
        )}

        {selectedPaymentMethod === 'upi' && (
          <div className='payment-details-section'>
            <div className='upi-payment-section'>
              <div className='qr-section'>
                <p>If Payment declined due to Security Reasons, Please Scan this below Qr Code</p>
                <div className='qr-code-container'>
                  {(() => {
                    const qrImagePath = getDetail('qrCodeImage');
                    
                    // Use the same pattern as BankDetailModal for image URL construction
                    let fullImageUrl = '';
                    if (qrImagePath) {
                      // If it's already a full URL, use it directly
                      if (qrImagePath.startsWith('http://') || qrImagePath.startsWith('https://')) {
                        fullImageUrl = qrImagePath;
                      } else {
                        // Fix Windows path separators and construct URL
                        const cleanPath = qrImagePath.replace(/\\/g, '/');
                        fullImageUrl = `${config.UPLOAD_SERVER_URL}/${cleanPath}`;
                      }
                    }
                    
                    console.log('🖼️ QR Code Debug Info:');
                    console.log('- Raw path:', selectedOptionData?.qrCodeImage);
                    console.log('- Processed path:', qrImagePath);
                    console.log('- Full URL:', fullImageUrl);
                    console.log('- Upload Server URL:', config.UPLOAD_SERVER_URL);
                    console.log('- Selected Option:', selectedOption);
                    
                    return qrImagePath ? (
                      <div className='qr-code-display'>
                        <img 
                          src={fullImageUrl}
                          alt='QR Code for Payment'
                          style={{
                            maxWidth: '250px',
                            maxHeight: '250px',
                            border: '2px solid #007bff',
                            borderRadius: '8px',
                            padding: '10px',
                            backgroundColor: '#fff',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                          }}
                          onError={(e) => {
                            console.error('❌ QR Code image failed to load');
                            console.error('- URL attempted:', fullImageUrl);
                            console.error('- Raw path:', selectedOptionData?.qrCodeImage);
                            console.error('- Error event:', e);
                            // Show error message instead of hiding
                            const errorDiv = document.createElement('div');
                            errorDiv.innerHTML = `
                              <div style="
                                width: 250px; 
                                height: 250px; 
                                border: 2px solid #dc3545; 
                                border-radius: 8px; 
                                display: flex; 
                                align-items: center; 
                                justify-content: center; 
                                background-color: #f8f9fa;
                                flex-direction: column;
                                text-align: center;
                                padding: 20px;
                              ">
                                <i class="fas fa-exclamation-triangle fa-2x text-danger mb-2"></i>
                                <div class="text-danger">QR Code failed to load</div>
                                <small class="text-muted mt-1">Path: ${qrImagePath}</small>
                              </div>
                            `;
                            (e.target as HTMLImageElement).parentNode?.replaceChild(errorDiv, e.target as HTMLImageElement);
                          }}
                          onLoad={() => {
                            console.log('✅ QR Code image loaded successfully:', fullImageUrl);
                          }}
                        />
                        <div className='mt-2 text-center'>
                          <small className='text-muted'>Scan this QR code to make payment</small>
                        </div>
                      </div>
                    ) : (
                      <div className='qr-code-placeholder'>
                        <div style={{
                          width: '250px',
                          height: '250px',
                          border: '2px dashed #ccc',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#f8f9fa'
                        }}>
                          <div className='text-center text-muted'>
                            <i className='fas fa-qrcode fa-3x mb-2'></i>
                            <div>QR Code not available</div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
                <div className='upi-id'>
                  <label>UPI ID:</label>
                  <div className='detail-value'>
                    <span>{getDetail('upiId')}</span>
                    <button type="button" className='copy-btn' onClick={() => copytoclipboard(getDetail('upiId'))}>
                      <i className='fas fa-copy'></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className='utr-input'>
                <input
                  type="text"
                  className='form-control'
                  placeholder='Enter Reference ID/UTR'
                  {...register('utrno')}
                  value={preview.type === 'upi' ? preview.utrno : ""}
                  onChange={(e) => handleUploadedUTR(e, 'upi')}
                />
              </div>

              <div className='upload-section'>
                <input
                  type='file'
                  id='upload-upi'
                  hidden
                  accept='image/png, image/jpg, image/jpeg'
                  {...register('imageUrl')}
                  onChange={(e) => handleUploadedFile(e, 'upi')}
                />
                <label htmlFor='upload-upi' className='upload-btn'>
                  UPLOAD IMAGE
                </label>
                <button
                  className={`confirm-btn ${preview?.imagePath && preview?.type === 'upi' ? 'active' : 'disabled'}`}
                  type='submit'
                  disabled={!preview?.imagePath || preview?.type !== 'upi'}
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Deposit

