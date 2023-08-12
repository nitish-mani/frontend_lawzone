import { useNavigate } from "react-router";
import "./card.css";

export default function Card() {
  const navigate = useNavigate();

  return (
    <div className="cardC">
      <div
        onClick={() => {
          navigate("/trademarks");
        }}
      >
        <h3>Trademarks</h3>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.wxQddEDY1SCe_umsoKiBlgHaER&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          The Trade Marks Registry was established in India in 1940 and
          presently it administers the Trade Marks Act, 1999 and the rules
          thereunder. It acts as a resource and information centre and is a
          facilitator in matters relating to trade marks in the country.
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/copyright");
        }}
      >
        <h3>Copyright</h3>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.MggA5bDEac6Mn-S43YVtSgHaHL&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          A copyright is a type of intellectual property that gives its owner
          the exclusive right to copy, distribute, adapt, display, and perform a
          creative work, usually for a limited time. The creative work may be in
          a literary, artistic, educational, or musical form.
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/barcode");
        }}
      >
        <h3>Barcode</h3>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.MvWZvxFYyF4stFHSlRfl2QHaFN&pid=Api&rs=1&c=1&qlt=95&w=170&h=119"
          alt="photo"
        />
        <p>
          A barcode or bar code is a method of representing data in a visual,
          machine-readable form. Initially, barcodes represented data by varying
          the widths and spacings of parallel lines.
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/iec");
        }}
      >
        <h3>Import & Export Code</h3>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.iJl7kZglZSKvMADPArtvCwAAAA&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          An Importer Exporter Code (IEC) is crucial business identification
          number which mandatory for export from India or Import to India.
          Unless specifically exempted, any person shall make no export or
          import without obtaining an IEC.
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/iso");
        }}
      >
        <h3>ISO</h3>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.IBhopqq5fcTCmjdMt3dSMQHaHa&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          The International Organization for Standardization is an international
          standard development organization composed of representatives from the
          national standards organizations of member countries. Membership
          requirements are given in Article 3 .....
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/proprietorship");
        }}
      >
        <h3>Proprietorship</h3>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.hTyjGLlZgJWlFsK9A65m9gHaF7&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          A proprietorship firm is the simplest business structure where the
          responsibility of operating and running the business lies solely with
          the owner. It's the most cost-effective way of starting a business
          especially if you have a small working capital.
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/llp");
        }}
      >
        <h3>LLP Registration</h3>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.K0i5IGVpv0pJZbko4wNpTgHaD5&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          Limited Liability Partnership (LLP) has become a preferred form of
          organization among entrepreneurs in India. An LLP incorporates the
          benefits of a partnership firm and a company. As the name suggests, an
          LLP is .....
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/pvtltd");
        }}
      >
        <h3>Pvt Ltd Company</h3>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.Go7s07XdZc5Md2sRMIlvWQAAAA&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          A Private Limited Company (PLC) is one of the most common types of
          legal entityin India. Private Limited Companies are governed by the
          Companies Act, 2013 and require a minimum of 2 Directors and 2
          Shareholders with .....
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/csr");
        }}
      >
        <h3>CSR</h3>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.cY9DFJB_o6d83eQZcL8_jgHaHa&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          Corporate social responsibility (CSR) or corporate social impact is a
          form of international private business self-regulation[1] which aims
          to contribute to societal goals of a philanthropic, activist, or
          charitable nature by engaging .....
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/msme");
        }}
      >
        <h3>MSME</h3>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.RaXDDNHG4ZsZnXwzJ7AjuwHaFj&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          MSME stands for Micro, Small and Medium Enterprises. The MSMEs are key
          contributors to the socio-economic development of the country. The
          MSMEs cover almost 95% of industrial units, 50% of exports and 45% of
          employment.
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/partnership");
        }}
      >
        <h3>Partnership</h3>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.DzghLPiBXBQmMJfGF46x7QHaFG&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          A partnership firm is created when two or more persons unite together
          and pool resources to establish a business. Partnership businesses’
          main goal is to make money. The Indian Partnership Act of 1932 defines
          the laws that apply .....
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/fssai");
        }}
      >
        <h3>FSSAI</h3>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.iAe8XrykCVeegqeF0AWdeAAAAA&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          Food Safety and Standards Authority of India (FSSAI) is a statutory
          body established under the Ministry of Health & Family Welfare,
          Government of India.The FSSAI has been established under the Food
          Safety and Standards Act, 2006, which is a ....
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/fcra");
        }}
      >
        <h3>FCRA</h3>
        <img
          src="https://tse2.explicit.bing.net/th?id=OIP.pSiv4eq6_yDJuvh95tILvQHaHa&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          The Foreign Contribution Regulation Act, 2010 was enacted with a view
          to:- 1. Regulate the acceptance and utilization of foreign
          contribution or foreign hospitality by certain individual associations
          or companies. 2. Prohibit the acceptance....
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/12A&80G");
        }}
      >
        <h3>12A & 80G</h3>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.dvilgok_jFxyFVBGDASvGgHaHa&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          Registration of trust or charitable institutions under section
          12A/12AA certifies that the Income Tax authorities recognise the
          registered institution or trust as having been incorporated or
          established for a charitable purpose.
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/niti");
        }}
      >
        <h3>NITI Aayog</h3>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.F9rc4BmGuYM0xaconooeSAAAAA&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          Persons in Individual Capacity are not allowed to apply for Niti Aayog
          Registration 2. Must have valid mail id and Mobile Number 3. Must have
          valid PAN Card, Aadhar Card details of governing body members 4. Must
          have valid Trust Deed ....
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/ngo");
        }}
      >
        <h3>NGO</h3>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.cFfa3LOIy4Kr8qadDGK1LgHaE9&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          A non-governmental organization (NGO) or non-governmental organisation
          is an organization that generally is formed independent from
          government. They are typically nonprofit entities, and many of them
          are active in humanitarianism or .....
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/isbn");
        }}
      >
        <h3>ISBN</h3>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.rlikklASjZPQ6S9hpqSy3gHaEw&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          The International Standard Book Number (ISBN) is a numeric commercial
          book identifier that is intended to be unique. Publishers purchase or
          receive ISBNs from an affiliate of the International ISBN Agency. An
          ISBN is assigned to each separate edition .....
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/pfesic");
        }}
      >
        <h3>PF & ESIC</h3>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.1jJcKuYAifkGLAhM_4bS6wHaDl&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          Any non-seasonal factory or establishment having more than 10
          employees (in some states it is 20 employees) who have a maximum
          salary of Rs. 21,000/- are covered under the ESI schemeand thus, they
          have to mandatorily register.....
        </p>
      </div>
      <div
        style={{ gridColumn: "2/3" }}
        onClick={() => {
          navigate("/compliance");
        }}
      >
        <h3>Compliance Work</h3>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.n2sVQLaQgKE11dj8ffivcAHaFr&pid=Api&P=0&h=180"
          alt="photo"
        />
        <p>
          Compliance is growing in importance at both national and international
          level. This can be seen clearly in the EU where directives have been
          adopted compelling governments to pass new laws while companies have
          to abide by new reporting obligations....
        </p>
      </div>
    </div>
  );
}
