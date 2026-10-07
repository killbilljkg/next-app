import Benefits from "./Benefits/Benefits";
import PayerHero from "./Hero/PayerHero";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import ProductOverview from "./ProductOverview/ProductOverview";
import ProofPoints from "./ProofPoints/ProofPoints";
import Cta from "./Cta/Cta";


export default function Payer() {
  return (
    <>
    <PayerHero />
    <ProductOverview />
    <KeyFeatures />
    <Benefits />
    <ProofPoints />
    <Cta />
    </>
  );
}
