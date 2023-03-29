import Calculator from '../component/main-calc';

const CalculatorPage = () => (
  <section className="calculate-page">
    <div className="content">
      <h2>Let&apos;s do some maths!</h2>
      <p className="calc-desc">
        Our basic calculator can handle all your basic arithmetic needs,
        including addition, subtraction, multiplication, and division. It also
        includes a modulus function.
      </p>
    </div>
    <Calculator />
  </section>
);

export default CalculatorPage;
