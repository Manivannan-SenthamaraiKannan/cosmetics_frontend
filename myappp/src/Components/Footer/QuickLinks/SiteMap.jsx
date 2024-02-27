import React from "react";
import {Link} from "react-router-dom";

const SiteMap = () => {
    return (
        <div className="container">
            <div className="row justify-content-around mb-3">
                {/*left container*/}
                <div className="col-4 text-center">
                    <Link to="/makeup" className="nav-link mb-3"><h4>Makeup</h4></Link>
                    <p className="d-flex align-items-center justify-content-around flex-wrap"><Link to="/face" className="nav-link">Face •</Link>
                        <Link to="/faceprimer" className="nav-link"> Face Primer •</Link><Link to="/concealer" className="nav-link">Concealer •</Link>
                        <Link to="/foundation" className="nav-link"> Foundation •</Link><Link to="/compact" className="nav-link">Compact •</Link>
                        <Link to="/contour" className="nav-link"> Contour •</Link><Link to="/loosepowder" className="nav-link"> Loose Powder •</Link>
                        <Link to="/blush" className="nav-link"> Blush •</Link><Link to="/bb&cc" className="nav-link"> BB & CC Cream •</Link>
                        <Link to="/highlighter" className="nav-link"> Highlighter •</Link><Link to="/settingspray" className="nav-link"> Setting Spray •</Link>
                        <Link to="/makeupremover" className="nav-link"> Makeup Remover •</Link><Link to="/sindoor" className="nav-link"> Sindoor •</Link>
                        <Link to="/tintedmoisturizer" className="nav-link"> Tinter Moisturizer •</Link><Link to="/bronzer" className="nav-link"> Bronzer •</Link>
                        <Link to="/eyes" className="nav-link"> Eyes •</Link><Link to="/kajal" className="nav-link"> Kajal •</Link>
                        <Link to="/eyeliner" className="nav-link"> Eye Liner •</Link><Link to="/mascara" className="nav-link"> Mascara •</Link>
                        <Link to="/eyeshadow" className="nav-link"> Eye Shadow •</Link><Link to="/eyebrow" className="nav-link"> Eyebrow Enhancer •</Link>
                        <Link to="/eyeprimer" className="nav-link"> Eye Primer •</Link><Link to="/falseeyelashes" className="nav-link"> False Eyelashes •</Link>
                        <Link to="/eyemakeupremover" className="nav-link"> Eye Makeup Remover •</Link><Link to="/undereyeconcealer" className="nav-link"> Under Eye Concealer •</Link>
                        <Link to="/contactlenses" className="nav-link"> Contact Lenses •</Link><Link to="/lips" className="nav-link"> Lips •</Link>
                        <Link to="/liquidlipstick" className="nav-link"> Liquid Lipstick •</Link><Link to="/lipcrayon" className="nav-link"> Lip Crayon •</Link>
                        <Link to="/lipgloss" className="nav-link"> Lip Gloss •</Link><Link to="/lipliner" className="nav-link"> Lip Liner •</Link>
                        <Link to="/lipprimer" className="nav-link"> Lip Primer •</Link><Link to="/lipplumber" className="nav-link"> Lip Plumber •</Link>
                        <Link to="/liptini" className="nav-link"> Lip Tint •</Link><Link to="/nails" className="nav-link"> Nails •</Link>
                        <Link to="/nailpolish" className="nav-link"> Nail Polish •</Link><Link to="/nailartkits" className="nav-link"> Nail Art Kits •</Link>
                        <Link to="/nailcare" className="nav-link"> Nail Care •</Link><Link to="/nailpolishremover" className="nav-link"> Nail Polish Remover •</Link>
                        <Link to="/manicure&pedicure" className="nav-link"> Manicure & Pedicure Kits •</Link><Link to="/nailpolishset" className="nav-link"> Nail Polish Sets •</Link>
                        <Link to="/tools&brushes" className="nav-link"> Tools & Brushes •</Link><Link to="/facebrush" className="nav-link"> Face Brush •</Link>
                        <Link to="/eyebrush" className="nav-link"> Eye Brush •</Link><Link to="/lipbrush" className="nav-link"> Lip Brush •</Link>
                        <Link to="/brushsets" className="nav-link"> Brush Sets •</Link><Link to="/brushcleaners" className="nav-link"> Brush Cleaners •</Link>
                        <Link to="/sponge&applicator" className="nav-link"> Sponge & Applicator •</Link><Link to="/eyelashcurlers" className="nav-link"> Eyelash Curlers •</Link>
                        <Link to="/tweezers" className="nav-link"> Tweezers •</Link><Link to="/sharpners" className="nav-link"> Sharpners •</Link>
                        <Link to="/mirrors" className="nav-link"> Mirrors •</Link><Link to="/makeuppouch" className="nav-link"> Makeup Pouches •</Link>
                        <Link to="/multifunctionalpalette" className="nav-link"> Multifunctional Makeup Palette •</Link><Link to="/makeupkits&combos" className="nav-link"> Makeupkits & Combos •</Link>
                        <Link to="/makeupkits" className="nav-link"> Makeup Kits •</Link><Link to="/makeupcombos" className="nav-link"> Makeup Combos •</Link></p>

                    <Link to="/makeup" className="nav-link mb-3"><h4>Hair</h4></Link>
                    <p className="d-flex align-items-center justify-content-around flex-wrap">
                        <Link to="/haircare" className="nav-link">Haircare •</Link>
                        <Link to="/shampoo" className="nav-link"> Shampoo •</Link><Link to="/dryshampoo" className="nav-link">Dry Shampoo •</Link>
                        <Link to="/hairoil" className="nav-link"> Hair Oil •</Link><Link to="/hairserum" className="nav-link">Hair Serum •</Link>
                        <Link to="/haircreams&masks" className="nav-link"> Hair Creams & Masks •</Link><Link to="/hairsupplements" className="nav-link"> Hair Supplements •</Link>
                        <Link to="/tools&accessories" className="nav-link"> Tools & Accessories •</Link><Link to="/hairbrushes" className="nav-link"> Hair Brushes •</Link>
                        <Link to="/haircombos" className="nav-link"> Hair Combos •</Link><Link to="/dryers&stylers" className="nav-link"> Dryer & Stylers •</Link>
                        <Link to="/straightners" className="nav-link"> Straightners •</Link><Link to="/rollers&curlers" className="nav-link"> Rollers & Curlers •</Link>
                        <Link to="/hairextension" className="nav-link"> Hair Extensions •</Link><Link to="/hairaccessories" className="nav-link"> Hair Accessories •</Link>
                        <Link to="/hairstylingscissors" className="nav-link"> Hair Styling Scissors •</Link><Link to="/hairstyling" className="nav-link"> Hair Styling •</Link>
                        <Link to="/haircolor" className="nav-link"> Hair Color •</Link><Link to="/hairspray" className="nav-link"> Hair Spray •</Link>
                        <Link to="/gels&waxes" className="nav-link"> Gels & Waxes •</Link><Link to="/shopbyhairtype" className="nav-link"> Shop By Hair Type •</Link>
                        <Link to="/curly&wavy" className="nav-link"> Curly & Wavy •</Link><Link to="/straight" className="nav-link"> Straight •</Link>
                        <Link to="/shopbyconcern" className="nav-link"> Shop By Concern •</Link><Link to="/hairfull&thinning" className="nav-link"> Hairfall & Thinning •</Link>
                        <Link to="/dandruff" className="nav-link"> Dandruff •</Link><Link to="/dry&frizzyhair" className="nav-link"> Dry & Frizzy Hair •</Link>
                        <Link to="/splitends" className="nav-link"> Split Ends •</Link><Link to="/curlenhancing" className="nav-link"> Curl Enhancing •</Link>
                        <Link to="/volume" className="nav-link"> Volume •</Link><Link to="/length&shine" className="nav-link"> Length & Shine •</Link>
                        <Link to="/bondbuilding" className="nav-link"> Bond Building •</Link><Link to="/professionalbrands" className="nav-link"> Professional Brands •</Link>
                        <Link to="/haikits&combos" className="nav-link"> Hair Kits & Combos •</Link><Link to="/hairkits" className="nav-link"> Hair Kits •</Link>
                        <Link to="/haircombos" className="nav-link"> Hair Combos •</Link><Link to="/luxurybrands" className="nav-link"> Luxury Brands •</Link></p>
                </div>
                {/*right container*/}
                <div className="col-4 text-center">
                    {/* skin*/}
                    <Link to="/makeup" className="nav-link mb-3"><h4>Skin</h4></Link>
                    <p className="d-flex align-items-center justify-content-around flex-wrap">
                        <Link to="/cleansers" className="nav-link">Cleansers •</Link>
                        <Link to="/facewash" className="nav-link"> Face Wash •</Link><Link to="/cleansingoil" className="nav-link">Cleansing Oil & Balms •</Link>
                        <Link to="/micellarwater" className="nav-link"> Micellar Water •</Link><Link to="/facewipes" className="nav-link">Face Wipes •</Link>
                        <Link to="/makeupremover" className="nav-link"> Makeup Remover •</Link><Link to="/scrubs&exfoliators" className="nav-link"> Scrubs & Exfoliators •</Link>
                        <Link to="/moisturizer" className="nav-link"> Moisturizers •</Link><Link to="/facemoisturizer&daycream" className="nav-link"> Face Moisturizer & Day Cream •</Link>
                        <Link to="/nightcream" className="nav-link"> Night Cream •</Link><Link to="/faceoils" className="nav-link"> Face Oils •</Link>
                        <Link to="/serums&essence" className="nav-link"> Serums and Essence •</Link><Link to="/allpurposegels&creams" className="nav-link"> AllPurpose Gels & Creams •</Link>
                        <Link to="/suncare" className="nav-link"> Sun Care •</Link><Link to="/facesunscreen" className="nav-link"> Face Sunscreen •</Link>
                        <Link to="/bodysunscreen" className="nav-link"> Body Sunscreen •</Link><Link to="/masks&peels" className="nav-link"> Masks & Peels •</Link>
                        <Link to="/sheetmasks" className="nav-link"> Sheet Masks •</Link><Link to="/sleepingmasks" className="nav-link"> Sleeping Masks •</Link>
                        <Link to="/facepacks" className="nav-link"> Face Packs •</Link><Link to="/facebleach" className="nav-link"> Face Bleaches •</Link>
                        <Link to="/shoptoners&mists" className="nav-link"> Shop Toners & Mists •</Link><Link to="/rosewater" className="nav-link"> Rose Water •</Link>
                        <Link to="/lipcare" className="nav-link"> Lip Care •</Link><Link to="/lipbalm" className="nav-link"> Lip Balm •</Link>
                        <Link to="/lipscrubs" className="nav-link"> Lip Scrubs •</Link><Link to="/lipmask" className="nav-link"> Lip Mask •</Link>
                        <Link to="/eyecare" className="nav-link"> Eye Care •</Link><Link to="/undereyecream" className="nav-link"> Under Eye Cream & Serums •</Link>
                        <Link to="/eyemask" className="nav-link"> Eye Masks •</Link><Link to="/dermocosmeticbrands" className="nav-link"> Dermocosmetics Brands •</Link>
                        <Link to="/specializedskincare" className="nav-link"> Specialized Skincare •</Link><Link to="/acnespotcorrector" className="nav-link"> Acne Spot Corrector •</Link>
                        <Link to="/nosestrips" className="nav-link"> Nose Strips •</Link><Link to="/facialpeels" className="nav-link"> Facial Peels •</Link>
                        <Link to="/bodycare" className="nav-link"> Body Care •</Link><Link to="/lotions&creams" className="nav-link"> Lotion & Creams •</Link>
                        <Link to="/bodybutter" className="nav-link"> Body Butter •</Link><Link to="/massageoils" className="nav-link"> Massage Oils •</Link>
                        <Link to="/manicure&showergel&bodywash" className="nav-link"> Shower Gels & Body Wash •</Link><Link to="/soaps" className="nav-link"> Soaps •</Link>
                        <Link to="/bathscrubs" className="nav-link"> Bath & Scrubs •</Link><Link to="/scrubs&loofahs" className="nav-link"> Scrubs & Loofahs •</Link>
                        <Link to="/antistreatchmarkcream" className="nav-link"> AntiStreatch Mark Creams •</Link><Link to="/anticellulitecreams" className="nav-link"> Anti-Cellulite Creams •</Link>
                        <Link to="/hands&feet" className="nav-link"> Hands & Feet •</Link><Link to="/neckcreams" className="nav-link"> Neck Creams •</Link>
                        <Link to="/facialkits" className="nav-link"> Facial Kits •</Link><Link to="/giftsets" className="nav-link"> Gift Sets •</Link>
                        <Link to="/skintools" className="nav-link"> Skin Tools •</Link><Link to="/facemassager" className="nav-link"> Face Massagers •</Link>
                        <Link to="/cleansingbrushes" className="nav-link"> Cleansing Brushes •</Link><Link to="/blackheadremover" className="nav-link"> Blackhead Remover •</Link>
                        <Link to="/dermarollers" className="nav-link"> Derma Rollers •</Link><Link to="/skinsupplements" className="nav-link"> Skin Supplements •</Link>
                        <Link to="/ayurvedicherbs" className="nav-link"> Ayurvedic Herbs •</Link><Link to="/acne" className="nav-link"> Acne •</Link>
                        <Link to="/dullskin" className="nav-link"> Dull Skin •</Link><Link to="/pigmentation" className="nav-link"> Pigmentation •</Link></p>

                    <Link to="/makeup" className="nav-link mb-3"><h4>Bath & Body</h4></Link>
                    <p className="d-flex align-items-center justify-content-around flex-wrap">
                        <Link to="/bath&showers" className="nav-link">Bath & Shower •</Link>
                        <Link to="/showergels&bodywash" className="nav-link"> Shower Gels & Body Wash •</Link><Link to="/bathscrubs&exfoliants" className="nav-link">Bath Scrubs and Exfoliants •</Link>
                        <Link to="/soaps" className="nav-link"> Soaps •</Link><Link to="/bathsalts" className="nav-link">Bath Salts •</Link>
                        <Link to="/bodycare" className="nav-link"> Body Care •</Link><Link to="/bodylotion&moisturizer" className="nav-link"> Body Lotion & Moisturizer •</Link>
                        <Link to="/bodybutter" className="nav-link"> Body Butter •</Link><Link to="/massageoils" className="nav-link"> Massage Oils •</Link>
                        <Link to="/essentialoil" className="nav-link"> Essential Oil •</Link><Link to="/talcumpowder" className="nav-link"> Talcum Powder •</Link>
                        <Link to="/femininehygine" className="nav-link"> Feminine Hygiene •</Link><Link to="/sanitarynapkins" className="nav-link"> Sanitary Napkins •</Link>
                        <Link to="/mensturalcups" className="nav-link"> Menstural Cups •</Link><Link to="/tampoons" className="nav-link"> Tampoons •</Link>
                        <Link to="/pantyliners" className="nav-link"> Panty Liners •</Link><Link to="/periodpanties" className="nav-link"> Perios Panties •</Link>
                        <Link to="/intimatecare" className="nav-link"> Intimate Care •</Link><Link to="/cottonbuds&balls" className="nav-link"> Cotton Buds & Balls •</Link>
                        <Link to="/otherperiodessentials" className="nav-link"> Other Period Essentials •</Link><Link to="/femalegrooming" className="nav-link"> Female Grooming •</Link>
                        <Link to="/bodyrazers&cartridges" className="nav-link"> Body Razers & Cartridges •</Link><Link to="/face&eyebrowrazors" className="nav-link"> Face & Eyebrow Razors •</Link>
                        <Link to="/wax&waxstrips" className="nav-link"> Wax & Wax Strips •</Link><Link to="/hairremovalcream" className="nav-link"> Hair Removal Cream •</Link>
                        <Link to="/epilators&bikinitrimmers" className="nav-link"> Epilators & Bikini Trimmers •</Link><Link to="/pre&postwaxessential" className="nav-link"> Pre & Post Wax Essential  •</Link>
                        <Link to="/bodymist&spray" className="nav-link"> Body Mists/Spray •</Link><Link to="/deodrants" className="nav-link"> Deodrants •</Link>
                        <Link to="/rollons" className="nav-link"> Roll-Ons •</Link><Link to="/malegrooming" className="nav-link"> Male Grooming •</Link>
                        <Link to="/razor&cartridges" className="nav-link"> Razor & Cartridges •</Link><Link to="/shavingcream" className="nav-link"> Shaving Cream •</Link>
                        <Link to="/foams&gels" className="nav-link"> Foams & Gels •</Link><Link to="/pre&postshave" className="nav-link"> Pre & Post Shaves •</Link>
                        <Link to="/shavingbrushes" className="nav-link"> Shaving Brushes •</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SiteMap;