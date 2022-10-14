import React from "react";

import "./reg.css";

function Reg(){
    return (
        <div className="Regform">
        <form >

       
        
        <table>
            <tr>
                <td>First-Name:</td>
                <td><input type="text" required></input></td>
            </tr>
            

            <tr>
                <td>Last-Name:</td>
                <td><input type="text" required></input></td>
            </tr>
            <tr>
                <td>Roll_No:</td>
                <td><input type="number" required></input></td>
            </tr>
            <tr>
                <td>Admitted_On:</td>
                <td><input type="date" required></input></td>
            </tr>
            <tr>
                <td>To_Class:</td>
                <td><select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>

                </select></td>
                <td><select>
                <option value="BC">CSE</option>
                    <option value="BC">CIVIL</option>
                    <option value="BC">IT</option>
                    <option value="BC">IBT</option>
                    <option value="BC">EEE</option>
                    <option value="BC">ECE</option>
                    <option value="BC">EIE</option>
                    <option value="BC">PROD</option>
                    <option value="BC">MECH</option>

                </select></td>

            </tr>
            <tr>
                <td>TNEA REG NO</td>
                <td><input type="number" required></input></td>
            </tr>
            <tr>
                <td>Receipt No:</td>
                <td><input type="number" required></input></td>
                <td><input type="date" required></input></td>

            </tr>
            <tr>
                <td>Father-Name:</td>
                <td><input type="text" required></input></td>
            </tr>
            <tr>
                <td>FatherLast-Name:</td>
                <td><input type="text" required></input></td>
            </tr>
            <tr>
                <td>Mother-Name:</td>
                <td><input type="text" required></input></td>
            </tr>
            <tr>
                <td>MotherLast-Name:</td>
                <td><input type="text" required></input></td>
            </tr>
            <tr>
                <td>Present Address:</td>
                <td>
                    <textarea required className="TextAA"></textarea>
                </td>
            </tr>
            <tr>
                <td>Permanent Address:</td>
                <td>
                    <textarea required className="TextAA"></textarea>
                </td>
            </tr>
            <tr>
                <td>Date-of-birth:</td>
                <td><input type="date" required></input></td>
                <td><input type="text" placeholder="In words"></input></td>
            </tr>
            <tr>
                <td>
                    Nationality:
                </td>
                <td>
                    <input type="text"></input>
                </td>
            </tr>
            <tr>
                <td>Name of the State:</td>
                <td><select>
                    <option>Tamilnadu</option>
                    <option>Kerala</option>
                    <option>Jammu and Kashmir</option>
                </select></td>
            </tr>
            <tr>
                <td>
                    Mother Tongue:
                </td>
                <td>
                    <input type="text"></input>
                </td>
            </tr>
            <tr>
                <td>Religion:</td>
                <td>
                    <select>
                        <option>Hindu</option>
                        <option>Muslim</option>
                        <option>Christain</option>
                        <option>northen</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    Caste:
                </td>
                <td>
                    <select>
                        <option>Kongu vellalar</option>
                        <option>Kongu vellalar</option>
                        <option>Kongu vellalar</option>
                        <option>Kongu vellalar</option>
                        <option>Kongu vellalar</option>
                    </select>
                </td>
            </tr>
            <tr>
            <td>Community:</td>
            <td><select name="community">
                    <option value="BC">OC</option>
                    <option value="BC">BC</option>
                    <option value="BC">MBC</option>
                    <option value="BC">BCM</option>
                    <option value="BC">SC</option>
                    <option value="BC">SCA</option>
                    <option value="BC">ST</option>
                </select></td>
                
            </tr>
            <tr>
            <td>Gender:</td>
                    <td>
                        <select>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </td>
            </tr>


            <tr>
                <td>Name of the Guardian:</td>
                <td><input type="text" placeholder="if father is not alive"></input></td>
            </tr>
            <tr>
                <td>Occupation:</td>
                <td><input type="text" required></input></td>
                <td><input type="number" required placeholder="Income in Rupee"></input></td>
            </tr>
            
            <tr>
                <td>Email-address:</td>
                <td><input type="email" required></input></td>
            </tr>
            
                    
               
                
            
           
            



        </table>
        <button type="submit">Submit</button>


        </form>
        </div>
        
                
                

            
        
    );

    
}

export default Reg;