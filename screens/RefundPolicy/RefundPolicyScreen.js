import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import globalStyle from '../../constants/globalStyle'
import MainHeader from '../../components/headers/MainHeader'
import SearchInput from '../../components/UI/inputs/SearchInput'
import StatisticsCard from '../../components/cards/StatisticsCard'
import Box from '../../components/UI/Box'

const RefundPolicyScreen = (props) => {
    return (
        <View style={globalStyle.container}>

            <MainHeader navigation={props.navigation} />

            <SearchInput />

            <ScrollView style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}>

                <Text style={globalStyle.textBold}>Returns and Refund Policy</Text>
                
                <Text style={styles.head}>1. Who is AJIO?</Text>
                <Text style={styles.description}>Reliance Retail Limited, a company incorporated under the laws of  India, having its registered office at 3rd Floor, Court House, Lokmanya  Tilak Marg, Dhobi Talao, Mumbai – 400 002, Maharashtra, India is a retail company which offers various retail solutions, including, through its website, and its mobile and tablet applications,  various online lifestyle, fashion and electronics solutions, which  inter alia facilitate the sale and purchase of electronics, toys, and  lifestyle and fashion merchandise </Text>

                <Text style={styles.head}>2. What is this Cancellation, Return and Refund Policy?</Text>
                <Text style={styles.description}>2.1. In keeping with AJIO’s goal of ensuring User satisfaction, this cancellation, return and refund Policy (“Cancellation, Return and Refund Policy”), together with the terms of use at ,  sets out AJIO’s procedures and policies in accepting: (a) Product  cancellations before the Product is delivered to a User; or (b) Product  returns, once a Product has been delivered to a User after purchase from  the Platforms. Any return or cancellation of Products by Users shall be  governed by and subject to the terms and conditions set out under this  Cancellation, Return and Refund Policy.</Text>
                <Text style={styles.description}>2.2. Users are required to peruse and understand the terms of this  Cancellation, Return and Refund Policy. If you do not agree to the terms  contained in this Cancellation, Return and Refund Policy, you are  advised not to accept the Terms of Use and may forthwith leave and stop  using the Platforms. The terms contained in this Cancellation, Return  and Refund Policy shall be accepted without modification and you agree  to be bound by the terms contained herein by initiating a request for  purchase of Product(s) on the Platforms.</Text>

                <Text style={styles.head}>3. Terms of cancellation</Text>

                <Text style={styles.description}>3.1. Cancellation before dispatch.</Text>
                <Text style={styles.subDescription}>3.1.1. A User is permitted to fully or partially cancel orders prior to its dispatch from AJIO.</Text>
                <Text style={styles.subDescription}>3.1.2. Upon successfully placing an order on the Platforms and after  AJIO has successfully handed over the Product(s) to its Logistic Partner  (as defined in the Delivery Policy), the User will receive a unique  tracking identity number, which will enable the User in tracking the  status of delivery of the purchased Products.</Text>
                <Text style={styles.subDescription}>3.1.3. Prior to the dispatch of the purchased Products, should the  User decide to cancel the purchase, the User can do so by referencing  the unique tracking identity number received by the User and requesting  AJIO to process a cancellation by sending an email to </Text>
                <Text style={styles.subDescription}>3.1.4. Refund. In all events of cancellation prior to the dispatch of  the purchased Products, AJIO shall initiate refunds within 2 (two)  business days from the date on which it received the request from the  User.</Text>
                <Text style={styles.subDescription}>3.1.5. In case of cash on delivery, the refund will reflect in the  User’s bank account and/or the User’s AJIO Wallet (as defined in the  Fees and Payments Policy) within such reasonable time (subject to the  policies of the User’s bank in case of bank account/credit card refunds)  from the date on which AJIO initiates the refund. All refunds, except  for refund to AJIO Wallet, shall be subject to applicable charges as may  be deducted by the User’s bank.</Text>
                <Text style={styles.description}>3.1.6. In case of payment made through prepaid mode through any  channel, the refund will be made to the original mode of payment. All  refunds shall be subject to applicable charges as may be deducted by the  User’s bank.</Text>
                
                <Text style={styles.description}>3.2. Cancellation after dispatch. We do not accept post-dispatch cancellation of orders.</Text>

                <Text style={styles.head}>4. Terms of Return and Refund</Text>

                <Text style={styles.description}>4.1. The category-wise details are set out below which shall apply,  subject to the other Terms and Conditions of this Cancellation, Return  and Refund Policy. Do read all sections carefully to understand the  conditions and cases under which returns will be accepted and check the  Products display page for Product specific return information.</Text>
                <Text style={styles.description}>4.2. It is hereby clarified that in the case of electronics,  notwithstanding anything to the contrary and subject to paragraph 4.12,  Products may be returned only in case of defects or deficiencies in the  Product, and not for any other reason</Text>
                <Text style={styles.description}>4.3. It is hereby clarified that in the case of toys, notwithstanding  anything to the contrary and subject to paragraph 4.12 (a) Users cannot  return certain Products which are specified as ‘non-returnable’ on the  relevant Product pages of the Platforms, and (b) Products may be  returned only in case of defects or damages in the Products, incorrect  products shipped to the User, missing components and empty sealed  packages, and not for any other reason.</Text>
                <Text style={styles.description}>4.4. It is hereby clarified that in case of certain Products,  including but not limited to accessories (watches) or precious  materials, notwithstanding anything to the contrary and subject to  paragraph 4.12, a refund will be made once the relevant Product reaches  the brand showroom / warehouse and the quality check of the Product is  completed. Further, if the User loses any certificate relating to said  Product, a fee of INR 500 shall be collected from such User.</Text>
                
                <Text style={styles.description}>4.5. AJIO shall not accept return or refund requests raised for any  of the following Products, except in accordance with paragraph 4.7 (“Non-returnable Products”)</Text>
                <Text style={styles.subDescription}>4.5.1. Lingerie, innerwear, and swimwear;</Text>
                <Text style={styles.subDescription}>4.5.2. Cosmetics;</Text>
                <Text style={styles.subDescription}>4.5.3. Deodorants and perfumes;</Text>
                <Text style={styles.subDescription}>4.5.4. Fashion jewellery;</Text>
                <Text style={styles.subDescription}>4.5.5. Socks and stockings;</Text>
                <Text style={styles.subDescription}>4.5.6. Gift vouchers issued by AJIO, if any;</Text>
                <Text style={styles.description}>4.5.7. Such other Products as may be specified by AJIO from time to time.</Text>

                <Text style={styles.description}>4.6. If the User is dissatisfied with the purchased Product received  from AJIO, or in the event where there are defects and deficiencies in  the Product (attributable to, and accepted by AJIO after due  verification at its sole discretion) or in case of late delivery (except  in case of force majeure including COVID-19), a User may initiate a  request for returning the Product on the Platforms. The User shall  initiate such requests for a return not later than: (a) 7 (seven) days  from the date on which he/she received the delivery of the Product, in  case of electronics, (b) 10 (ten) days from the date on which he/she  received the delivery of the Product, in case of toys, (c) 30 (thirty)  days from the date on which he/she received the delivery of the Product,  in case of non-electronic Products or toys.</Text>
                <Text style={styles.description}>4.7. The User can only return Non-returnable Products if there are  defects and deficiencies in the Product (attributable to, and accepted  by AJIO after due verification at its sole discretion) or if such  Non-returnable Products are delivered late (except in case of force  majeure including COVID-19). The User shall initiate a request for  returning such Non-returnable Products on the Platforms not later than 7  (seven) days from the date of delivery of Product.</Text>
                
                <Text style={styles.description}>4.8. Subject to the terms of this Cancellation, Return and Refund  Policy, AJIO offers Users an easy return / refund policy. AJIO also  accepts partial returns wherein User can raise a return request for one  or all Products except in case of Bundled Packages (as defined  hereinafter). The process for initiating the process for raising a  return / refund / exchange request is:</Text>
                <Text style={styles.subDescription}>4.8.1. Please login with your credentials and visit the My Account section.</Text>
                <Text style={styles.subDescription}>4.8.2.  Select the order you want to return and click on “Return/Exchange” and  follow the instructions on this page to obtain a Return ID. Kindly email  an image of the Product and the invoice for our reference.</Text>
                <Text style={styles.subDescription}>4.8.3.  At the time of creation of this return / refund request, the User shall  specify the preferred mode of refund i.e. either the User’s bank or AJIO  Wallet, if the User had used the cash on delivery mode of payment.</Text>
                <Text style={styles.subDescription}>4.8.4. The Products will be picked up within the timelines intimated by AJIO.</Text>
                <Text style={styles.subDescription}>4.8.5.  AJIO will initiate the refund or replacement process only if the  Products are received in accordance with the Cancellation, Return and  Refund Policy.</Text>
                <Text style={styles.description}>4.8.6. On certain select days as specified by AJIO separate policies may be applicable.</Text>

                <Text style={styles.description}>4.9. While raising a request for return on the Platforms, the User  shall have the option to seek a refund of the monies paid by him/her  towards the purchase of the Product. The User will be required to  produce a copy of the original invoice at the time of placing a request  for return of Products. The User shall ensure that the Product(s) being  returned comply with the conditions set out under this Cancellation,  Return and Refund Policy and are, among other conditions, unused,  unwashed, with price tags intact, all packaging material undamaged and  unused. Such returned Product(s) should not carry stains, sweat,  detergent, or body odour. AJIO reserves the right to alter and enforce  this Cancellation, Return and Refund Policy at any time without having  to serve a prior notice on the User. However, AJIO will notify the Users  of any change in the Cancellation, Return and Refund Policy by posting a  notice on the homepage of the Platform.</Text>
                <Text style={styles.description}>4.10. If a User has purchased Products which form a part of a package  of other Products, or if the Product forms a part of a promotional  package (collectively, the “Bundled Package”), the User shall be  required to return all the Products that form a part of the Bundled  Package for AJIO to process refunds. For illustrative purposes, if the  User has purchased a shirt and a pair of pants as 1 (one) Product in a  promotional package, the User will be required to return both the shirt  and the pair of pants and will not be permitted to return either only  the shirt or only the pair of pants from the Bundled Package. It is  hereby clarified that if the Bundled Package consists of any  Non-returnable Product along with other Products, the User shall return  all other Products except the Non-returnable Products.</Text>
                <Text style={styles.description}>4.11. Return of or refund for purchased Products shall not be entertained by AJIO if:</Text>
                
                <Text style={styles.subDescription}>4.11.1.  the Product has been used for reasons apart from checking fit and  comfort. If AJIO is satisfied that the Product has been used for reasons  apart from checking fit and comfort, AJIO shall reserve the right to  reject the return of the Product;</Text>
                <Text style={styles.subDescription}>4.11.2. the Product has been washed;</Text>
                <Text style={styles.subDescription}>4.11.3.  the price tags, brand tags, box, original packaging material, and  accompanying accessories have been damaged or discarded by the User;</Text>
                <Text style={styles.subDescription}>4.11.4. the serial number/IMEI number/bar code of the Product, as applicable, does not match AJIO’s records;</Text>
                <Text style={styles.subDescription}>4.11.5.  the accessories delivered with the Product (such as chargers, earphones,  user manuals, etc) are not returned along with the Product, in an  undamaged condition;</Text>
                <Text style={styles.subDescription}>4.11.6. there are any dents, scratches, tears or any other damage to the Products or any part thereof;</Text>
                <Text style={styles.subDescription}>4.11.7. in the case of electronics, if the Products sought to be returned are not sealed in the poly jiffy bag provided by AJIO;</Text>
                <Text style={styles.subDescription}>4.11.8.  the gifts accompanying the purchased Product have not been returned, or  upon being returned, show signs of being used, washed, or defect;</Text>
                <Text style={styles.subDescription}>4.11.9. in case of precious materials or accessories (watches), if the returned Products are fake or counterfeit or damaged;</Text>
                <Text style={styles.subDescription}>4.11.10. AJIO is satisfied that the Product has been rendered defective or unusable; or</Text>
                <Text style={styles.description}>4.11.11. if the User in any way breaches the Cancellation, Return and Refund Policy</Text>

                <Text style={styles.description}>4.12. In the event a User returns a Product that is not accompanied  by the accessories, gifts or other items originally bundled with such  Product, AJIO shall have the right, exercisable at its sole discretion,  to (i) (a) refuse to accept the return of such Product, or (b) process  any refund thereof, or (ii) deduct the amount payable in respect of such  items from the amount of refund such User is entitled to.</Text>
                <Text style={styles.description}>4.13. AIJO shall initiate a process of refund of the monies paid by  the User towards purchase of a Product, if upon conducting quality  checks, it is satisfied that the Product being returned entitles the  User to a refund. It is further clarified that AJIO shall not be  required to make any refund or return the Product that it deems  ineligible for a refund or return based on such quality checks.</Text>
                <Text style={styles.description}>4.14. It is expressly clarified that the refund entitled to by a User  shall not include monies paid towards shipping charges or any other  such charges applicable from time to time, except in case of a Product  having a defect at the time of delivery (for reasons attributable to,  and accepted by AJIO after due verification at its sole discretion).</Text>
                <Text style={styles.description}>4.15. AJIO shall make all reasonable attempts to keep the User apprised  of the status of refund through updates shared on the User’s registered  mobile number and email address. AJIO disclaims all liabilities that may  arise on account of its failure to keep the User apprised of the status  of the refund.</Text>
                <Text style={styles.description}>4.16. If the request for refund is undisputed by AJIO, the refund  should reflect in the User’s bank account and/or the User’s AJIO Wallet  within such reasonable time (subject to the policies of the User’s bank  in case of bank account/credit card refunds) from the date on which AJIO  initiates the refund.</Text>
                <Text style={styles.description}>4.17. Refunds shall be processed by AJIO through its normal banking  channels except in cases where a User had utilised his/her AJIO Wallet  for purchase of Products or opted for the cash on delivery option. Where  a User had utilised his/her AJIO Wallet for payment towards the  purchased Products, AJIO shall process all refunds only into such User’s  AJIO Wallet. Where a User had opted for cash on delivery option for  payment towards the purchased Products, AJIO shall process all refunds  into either the User’s AJIO Wallet or the Users’ valid bank accounts, if  details of such accounts are provided by the User to AJIO at the time  of refund. Further, should the User have used more than 1 (one) payment  option for the purchase of Products on the Platforms, AJIO shall process  all refunds through a Payment Option (as defined in the Fees and  Payments Policy) AJIO deems fit, in its sole discretion, to process such  refunds. Once the amount is refunded into a User’s AJIO Wallet, it  cannot be further transferred to any other bank account or encashed, and  would continue to remain in the User’s AJIO Wallet until exhausted for  shopping on the Platforms. For the purpose of illustration, if a User  purchases a Product worth INR 1,000 (Indian Rupees One thousand) and  pays INR 500 (Indian Rupees Five hundred) for the purchase of such  Product using balances in his/her AJIO Wallet, and the remaining INR 500  through his credit card, and such amount is to be refunded pursuant to  the refund criteria set out under this Cancellation, Return and Refund  Policy being met, then AJIO may choose to refund, at its sole  discretion, INR 500 (Indian Rupees Five hundred) to such User’s AJIO  Wallet and the remaining INR 500 (Indian Rupees Five hundred) to the  User’s credit card source account, or both the amounts only to such  User’s AJIO Wallet.</Text>
                <Text style={styles.description}>4.18. Return of purchased Products are facilitated through AJIO’s  reverse-logistics partners. Upon a User making a request for return of  Product on the Platforms and the same being duly acknowledged by AJIO,  AJIO’s reverse-logistics partners shall get in touch with the User in  order to collect the purchased Products from the User and delivering it  to AJIO. While AJIO has made reasonable endeavours to ensure delivery  and pick-ups across multiple locations in India, currently, AJIO has a  select list of areas where deliveries and collection can be undertaken  by its reverse-logistics partners. In events where AJIO is unable to  facilitate a pick-up of the purchased Product for return from the User,  the User is required to self-ship the Product to AJIO’s shipping  warehouse, the address for which will be intimated to the User upon the  User placing such request for return.. Upon self-shipping the Product to  AJIO’s warehouse, the User shall be required to scan the courier/postal  receipt to</Text>
                <Text style={styles.description}>for AJIO’s records. The aforesaid return by self-shipping the Products  is subject to the returned Products passing quality check at AJIO’s  returns desk/warehouse.</Text>
                <Text style={styles.description}>4.19. In the event where the User claims to have self-shipped the  Product in accordance with the process set out in paragraph 4.18 above  and AJIO does not receive the returned Product or the package containing  such Product is empty, the User shall be required to submit the ‘proof  of delivery’ received from the courier/postal agency to AJIO to prove  his/her claim of return of Products through self-shipment to AJIO. It is  specifically clarified that any refunds shall be processed by AJIO only  upon it receiving the returned Products and concluding required quality  checks or receiving the ‘proof of delivery’ from the User, as the case  may be.</Text>
                
                <Text style={styles.head}>5. Grievance Redressal</Text>
                <Text style={styles.description}>Any grievances relating to the Cancellation, Return and Refund Policy  may be directed by you to the grievance officer of AJIO who can be  contacted at</Text>

                <Box height={20} />
                <StatisticsCard />
                <Box height={20} />
            
            </ScrollView>

        </View>
    )
}

export default RefundPolicyScreen

const styles = StyleSheet.create({
    head: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 12,
        color: '#000',
        marginBottom: 10
    },
    description: {
        fontFamily: 'Montserrat-Regular',
        color: '#000',
        fontSize: 12,
        marginBottom: 20
    },
    subDescription: {
        fontFamily: 'Montserrat-Regular',
        color: '#000',
        fontSize: 12,
        marginBottom: 5
    }
})