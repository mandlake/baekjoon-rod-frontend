"use client";

import "./article.css";

interface ICompany {
  company: string;
  contact: string;
  country: string;
}

const Main = (props: ICompany) => {
  return (
    <>
      <tr>
        <td>{props.company}</td>
        <td>{props.contact}</td>
        <td>{props.country}</td>
      </tr>
    </>
  );
};

const Companies = () => {
  const articles = [
    {
      company: "Alfreds Futterkiste",
      contact: "Maria Anders",
      country: "Germany",
    },
    {
      company: "Centro comercial Moctezuma",
      contact: "Francisco Chang",
      country: "Mexico",
    },
    { company: "Ernst Handel", contact: "Roland Mendel", country: "Austria" },
    { company: "Island Trading", contact: "Helen Bennett", country: "UK" },
    {
      company: "Laughing Bacchus Winecellars",
      contact: "Yoshi Tannamuri",
      country: "Canada",
    },
    {
      company: "Magazzini Alimentari Riuniti",
      contact: "Giovanni Rovelli",
      country: "Italy",
    },
  ];
  const companyList = articles.map((v, i) => (
    <Main key={i} company={v.company} contact={v.contact} country={v.country} />
  ));
  return (
    <>
      <h1>글쓰기</h1>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>{companyList}</tbody>
      </table>
    </>
  );
};

export default Companies;
