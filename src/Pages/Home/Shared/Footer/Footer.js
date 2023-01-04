import React from "react";
import trivagoImg from '../../../../Images/trivago.png';


const Footer = () => {

  return (
    <footer className="bg-[#0a1121] text-gray-200 py-10">
      <div className="w-[1080px] mx-auto">
        <div>
          <p>
            Thanks for subscribing to the trivago newsletter. We have sent you
            an email to confirm your registration. If you do not it in your
            inbox, please also check your spam folder. Happy hotel hunting!
          </p>
        </div>
        <div className="mt-10 flex justify-between">
          <p><strong>trivago N.V.,</strong> Kesselstraße 5 – 7, 40221 Düsseldorf, Germany</p>
          <div>
            <select className="bg-[#0a1121] text-gray-200 border p-2 rounded-md">
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antartica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegowina">
                Bosnia and Herzegowina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">
                British Indian Ocean Territory
              </option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos Islands">Cocos (Keeling) Islands</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Congo">
                Congo, the Democratic Republic of the
              </option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cota D'Ivoire">Cote d'Ivoire</option>
              <option value="Croatia">Croatia (Hrvatska)</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="East Timor">East Timor</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands">
                Falkland Islands (Malvinas)
              </option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="France Metropolitan">France, Metropolitan</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">
                French Southern Territories
              </option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard and McDonald Islands">
                Heard and Mc Donald Islands
              </option>
              <option value="Holy See">Holy See (Vatican City State)</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran (Islamic Republic of)</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Democratic People's Republic of Korea">
                Korea, Democratic People's Republic of
              </option>
              <option value="Korea">Korea, Republic of</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao">Lao People's Democratic Republic</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon" selected>
                Lebanon
              </option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libyan Arab Jamahiriya">
                Libyan Arab Jamahiriya
              </option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macau">Macau</option>
              <option value="Macedonia">
                Macedonia, The Former Yugoslav Republic of
              </option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia">
                Micronesia, Federated States of
              </option>
              <option value="Moldova">Moldova, Republic of</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Northern Mariana Islands">
                Northern Mariana Islands
              </option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russian Federation</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint LUCIA">Saint LUCIA</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2">
        <svg  viewBox="0 0 24 24" className="w-7 pointer-events-none max-h-full max-w-full" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3 5.62h-1.52a.65.65 0 00-.61.54v1.56H15c-.09 1.19-.26 2.28-.26 2.28h-1.88v6.75h-2.8V12H8.7V9.72h1.36V7.86c0-.33-.07-2.61 2.87-2.61H15z" fill="currentColor"></path></svg>
        <svg viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full h-full w-7" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm5.62 7.86v.44a7.91 7.91 0 01-8 7.87A8 8 0 015.41 17h.44a6.3 6.3 0 003.78-1.3h-.2a2.68 2.68 0 01-2.56-1.92 2.32 2.32 0 00.53.05 2.9 2.9 0 00.79-.11 2.58 2.58 0 01-1.43-.67 2.66 2.66 0 01-.88-2 .57.57 0 010-.13 2.58 2.58 0 001.27.32 2.68 2.68 0 01-1.06-1.15h-.07a2.63 2.63 0 01-.22-1 2.53 2.53 0 01.41-1.41 6.72 6.72 0 00.9 1 1 1 0 00.19.17 7.7 7.7 0 002.18 1.07l.33.12a9 9 0 001 .28h.27a7.6 7.6 0 001 .09 2.59 2.59 0 01-.08-.58 2.66 2.66 0 01.24-1.13 2.47 2.47 0 01.52-.79 1.54 1.54 0 01.24-.26A2.76 2.76 0 0114.82 7a2.74 2.74 0 012.05.92l.35-.09a7.06 7.06 0 001.42-.58.88.88 0 01-.07.23 2.29 2.29 0 01-1.11 1.26v.09A6 6 0 0019 8.37a8.87 8.87 0 01-1.38 1.49z" fill="currentColor"></path></svg>

        <svg viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full h-full w-7" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><circle cx="12" cy="12" r="2.25"></circle><path d="M17.49 9.27A3.85 3.85 0 0017.26 8a2 2 0 00-.51-.77 2 2 0 00-.75-.49 3.85 3.85 0 00-1.25-.23H9.29A3.85 3.85 0 008 6.74a2 2 0 00-.77.51 2 2 0 00-.49.75 3.85 3.85 0 00-.23 1.25v5.46A3.85 3.85 0 006.74 16a2 2 0 00.51.77 2 2 0 00.77.51 3.85 3.85 0 001.25.23h5.46a3.85 3.85 0 001.27-.25A2.32 2.32 0 0017.26 16a3.85 3.85 0 00.23-1.25v-2.73c0-1.8.03-2.02 0-2.75zM12 15.46A3.46 3.46 0 1115.46 12 3.46 3.46 0 0112 15.46zm3.6-6.25a.81.81 0 11.81-.81.81.81 0 01-.81.81z"></path><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm6.7 12.78a4.82 4.82 0 01-.31 1.64 3.49 3.49 0 01-2 2 4.82 4.82 0 01-1.64.31c-.72 0-.95.05-2.78.05s-2.06 0-2.78-.05a4.82 4.82 0 01-1.64-.31 3.19 3.19 0 01-1.19-.78 3.19 3.19 0 01-.78-1.19 4.82 4.82 0 01-.31-1.64v-2.78-2.78a4.82 4.82 0 01.31-1.64 3.19 3.19 0 01.78-1.19 3.19 3.19 0 011.19-.78 5 5 0 011.64-.32h5.56a5 5 0 011.64.32 3.19 3.19 0 011.19.78 3.19 3.19 0 01.78 1.19 4.82 4.82 0 01.31 1.64c0 .72.05.95.05 2.78s.02 2.03-.02 2.75z"></path></g></svg>

        <svg viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full h-full w-7" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M10 9l5 3-5 3V9z"></path><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm7 12.59A2.36 2.36 0 0116.59 17H7.41A2.36 2.36 0 015 14.59V9.41A2.36 2.36 0 017.41 7h9.18A2.36 2.36 0 0119 9.41z"></path></g></svg>

        <svg viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full h-full w-7" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zM8.73 17.4H6.15V9.71h2.58zM7.44 8.66A1.33 1.33 0 117.46 6a1.33 1.33 0 110 2.66zM18 17.4h-2.57v-4.12c0-1-.37-1.74-1.31-1.74a1.39 1.39 0 00-1.31.94 1.66 1.66 0 00-.09.62v4.3h-2.57V9.71h2.57v1.09A2.54 2.54 0 0115 9.53c1.69 0 3 1.09 3 3.46z" fill="currentColor"></path></svg>
        </div>
        <div className="flex justify-between mt-10">
            <div>
            <a className="block" href="/">Company</a>
            <a className="block" href="/">Jobs</a>
            <a className="block" href="/">Press</a>
            <a className="block" href="/">Investor relations</a>
            </div>
            <div>
                <a className="block" href="/">Mobile apps - searching on the go</a>
                <a className="block" href="/">trivago Business Studio</a>
            </div>
            <div>
                <a className="block" href="/">Help</a>
                <a className="block" href="/">Learn how trivago works</a>
                <a className="block" href="/">Terms and conditions</a>
                <a className="block" href="/">Legal information</a>
                <a className="block" href="/">Do Not Sell My Personal Information</a>
                <a className="block" href="/">Privacy notice</a>
                <a className="block" href="/">Cyber Security</a>
                <a className="block" href="/">Coronavirus (COVID-19) travel advice</a>
            </div>
        </div>
        <div className="flex justify-center">
            <div>
            <img className="mx-auto" src={trivagoImg} alt="" />

<p>Copyright 2023 trivago | All rights reserved.</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
