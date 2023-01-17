import Card from "./Card";
import "./team.scss";
export default function Team() {
  return (
    <div className="teamContainer">
      <h2>Our Team</h2>
      <Card
        name="Brice Bian"
        title="Founder & Game Producer"
        describe="More than 17 years of experience in gam development and more than 4 years of experience in blockchain game development. Head of the development and operation team of several tens of millions of traditional online game products,serial entrepreneur, and successfull executive."
      />
      <Card
        name="Qilin"
        title="Co-founder & COO"
        describe="Plentiful practical experience in the fields of blockchain, finance and media, Qilin has operated several successful projects in the blockchain field, managed & operated a blockchain distributed overseas storage branch."
      />
      <Card
        name="TT"
        title="Co-founder & CTO"
        describe="More than 18 years of experience in gam development. Chief architect and technical director of millions online traditional online gam products. Technical director of large-scale travel experience VR game products."
      />
      <Card
        name="Chiris"
        title="Copywriting & Graphics director"
        describe="Chiris Horwood is a teacher and coach who has spent almost two decades in asia and travelling the world. Chiris has produced one feature-length documentary and multiple short films."
      />
    </div>
  );
}
