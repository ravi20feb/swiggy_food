import React from "react";
import  ReactDOM  from "react";
  

function AddressFooter(){
    return(
        <>
            <div className="px-5 py-0 bg-[#000]  min-h-[18.625rem] overflow-auto">
                <div className="relative flex flex-col h-full max-w-[75rem] min-w-[75rem] mx-auto my-0 pt-[4.75rem]">
                    <div className="flex justify-between pb-5 border-b-[1px] border-b-[#4D4D4D]">
                        <div className="_2Im4A min-w-[18.75rem]" >
                            <div className="T_dbb text-[gray] text-[.94rem] font-semibold uppercase" >
                            Company
                            </div>
                            <ul className="_2gbMt [&>.company-tag]:mt-[.940rem] text-[#fff] leading-5" >
                                <li className="company-tag" >
                                <a className="company-detail" href="/about" alt="" target="_blank" >About us</a>
                                </li>
                                <li className="company-tag" >
                                <a className="company-detail" href="/team" alt="" target="_blank" >
                                Team
                                </a>
                                </li>
                                <li className="company-tag" >
                                <a className="company-detail" href="/careers" alt="" target="_blank" >Careers</a>
                                </li>
                                <li className="company-tag" >
                                    <a className="company-detail" href="#" rel="nofollow noopener" alt="" target="_blank">Swiggy Blog</a>
                                </li>
                                <li className="company-tag" >
                                <a className="company-detail" href="/bug-bounty" rel="nofollow noopener" alt="" target="_blank" >Bug Bounty</a>
                                </li>
                                <li className="company-tag" >
                                <a className="company-detail" href="/swiggy-super" rel="nofollow noopener" alt="" target="_blank" >Swiggy One</a>
                                </li>
                                <li className="company-tag" >
                                <a className="company-detail" href="https://corporate.swiggy.com" rel="nofollow noopener" alt="" target="_blank" >Swiggy Corporate</a>
                                </li>
                                <li className="company-tag" >
                                <a className="company-detail" href="/swiggy-instamart" rel="nofollow noopener" alt="" target="_blank" >Swiggy Instamart</a>
                                </li>
                                <li className="company-tag" >
                                <a className="company-detail" href="/swiggy-genie" rel="nofollow noopener" alt="" target="_blank">Swiggy Genie</a>
                                </li>
                                <li className="company-tag" >
                                <a className="company-detail" href="/swiggy-hdfc-bank-credit-card" alt="" target="_blank">Swiggy HDFC Bank Credit Card</a>
                                </li>
                            </ul>
                        </div>
                        <div className="_2Im4A min-w-[18.75rem]" >
                        <div className="T_dbb text-[gray]" >Contact
                        </div>
                            <ul className="_2gbMt [&>.contact-detail]:mt-[.940rem] text-[#fff]" >
                                <li className="contact-detail" >
                                <a className="_3TjLz" href="/support" alt="Help &amp; Support" >Help &amp; Support</a>
                                </li>
                                <li className="contact-detail" >
                                <a className="_3TjLz" href="#" rel="nofollow noopener noreferrer" alt="" target="_blank" >Partner with us</a>
                                </li>
                                <li className="contact-detail" >
                                <a className="_3TjLz" href="#" rel="nofollow noopener" alt="" target="_blank" >Ride with us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="_2Im4A min-w-[18.75rem]" >
                        <div className="T_dbb text-[gray]" >Legal</div>
                            <ul className="_2gbMt [&>.term-condition-detail]:mt-[.94rem] text-[#fff]" >
                                    <li className='term-condition-detail' >
                                    <a className="_3TjLz" href="/terms-and-conditions" alt="" target="_blank" >Terms &amp; Conditions</a>
                                    </li>
                                    <li className='term-condition-detail' >
                                    <a className="_3TjLz" href="/refund-policy" alt="" target="_blank" >Refund &amp; Cancellation</a>
                                    </li>
                                    <li className='term-condition-detail' >
                                    <a className="_3TjLz" href="/privacy-policy" alt="" target="_blank" >Privacy Policy</a>
                                    </li>
                                    <li className='term-condition-detail' >
                                    <a className="_3TjLz" href="/cookie-policy" alt="" target="_blank" >Cookie Policy</a>
                                    </li>
                                    <li className='term-condition-detail' >
                                    <a className="_3TjLz" href="/offer-terms" alt="" target="_blank" >Offer Terms</a>
                                    </li>
                                    <li className='term-condition-detail' >
                                    <a className="_3TjLz" href="/beware-of-phishing-and-fraud" alt="" target="_blank" >Phishing &amp; Fraud</a>
                                    </li>
                                    <li className='term-condition-detail' >
                                    <a className="_3TjLz" href="/tnc-corporate-sm" alt="" target="_blank" >Corporate – Swiggy Money Codes Terms and Conditions</a>
                                    </li>
                                    <li className='term-condition-detail' >
                                    <a className="_3TjLz" href="/tnc-corporate-discount" alt="" target="_blank" >Corporate - Swiggy Discount Voucher Terms and Conditions</a></li>
                                </ul>
                        </div>
                        <div className="w-[12.5rem] ">
                            <img src={require('../../assests/play.webp')  } className="border-2 border-[gray] rounded-xl"/>
                            <img src={require('../../assests/iOS.webp')  } className="border-2 border-[gray] rounded-xl mt-5"/>
                        </div>
                    </div>
                    <div className="border-b-[1px] border-[#4d4d4d] pt-[1.875rem] pb-[2.8rem]">
                        <h4 className="uppercase text-[gray] font-semibold">explore restaurants near me</h4>
                        <div className="flex justify-between items-start text-[#fff] px-0 py-auto mt-3 text-[15px]">
                         <h4 >Explore Restaurant Near Me</h4>
                         <h4 >Explore  Top Rated Restaurant Near Me</h4>
                        </div>
                    </div>
                    <div className="flex grow items-center px-0 py-[1.81rem]">
                        <div className="w-[9rem] fill-white">
                            <a href="#">
                            <img src={require('../../assests/grayswi.webp')}>

                            </img>

                            </a>
                        

                        </div>



                         <div className="text-[1.25rem] text-center text-white grow">© 2023 Swiggy</div>
                         <div className="[&>.icon]:mr-6    [&>.icon]:inline-block">
                            <a href="#" className="icon">
                                <img src={require('../../assests/icon-facebook.webp')} className="w-6"></img>

                            </a>
                            <a href="#" className="icon">
                                <img src={require('../../assests/icon-pinterest.webp')} className="w-6"></img>

                            </a>
                            <a href="#" className="icon">
                                <img src={require('../../assests/icon-instagram.webp')} className="w-6"></img>

                            </a>
                            <a href="#" className="icon">
                                <img src={require('../../assests/icon-twitter.webp')} className="w-6"></img>

                            </a>
                         </div>
                    </div>
                    

                </div>
            </div>
        </>

    )
}
export default  AddressFooter;


