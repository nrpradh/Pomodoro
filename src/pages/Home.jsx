// import GridLayout from "../Components/Gemini_Layout";
import MyLayout from "../Components/MyLayout";

const Home = () => {
  return (
    <>
      <section class="">
        <div class="bg-allBlack lg:pb-20 lg:pt-28 pb-8 py-12  lg:px-8 mx-4  rounded-sm lg:rounded-lg"> 
         
            <h1 class="lg:text-[156px] text-5xl uppercase font-medium text-allWhite">
                NRP's 
              <span className="text-allBlue"> Tools</span>
              <span className="text-allOrange"> Deck</span>
            </h1>
         
        </div>
        <MyLayout/>
      </section>
    </>
  );
};

export default Home;
