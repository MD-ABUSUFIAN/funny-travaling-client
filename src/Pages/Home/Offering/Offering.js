import React, { useEffect, useState } from 'react';
import Offer from '../Home/Offer/Offer';

const Offering = () => {
    const [offers,setOffers]=useState([]);
    useEffect(()=>{
        fetch('https://boiling-hollows-19614.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setOffers(data))
    },[])
    return (
        <div>
            <marquee><h1 className="fs-1 bg-primary p-4 my-4 text-center fw-bolder w-50 text-white rounded-pill"> VACATION OFFER 10%</h1></marquee>
            <div className="row gx-4 gy-4 my-5">
                {
                    offers.map((offer,index)=><Offer key={offer._id} offer={offer}></Offer>)
                }


            </div>
        </div>
    );
};

export default Offering;





// const user=[
//     {
//         title:"Disneyland",
//         address:"Disneyland, Anaheim",
//         img:"https://cdn.thecrazytourist.com/wp-content/uploads/2015/08/Disneyland-Anaheim.jpg",
//         price:"500",
//         description:"Why you’ve got to go: Yes, it’s a bit of a cliché, but Disneyland is a dream world for children. Kids will love seeing their favorite characters come to life and parents will love the sense of nostalgia it brings. Disneyland is truly a magical place that creates memories that families will never forget What to do Ride on all the classic Disney rides, collect autographs, and eat the over-the-top carnival style food. Explore Toontown, Fantasyland, Tomorrowland, Critter country, the Sleeping Beauty Castle, and more. There is also a nightly fireworks show that every kid will love watching.Get there when kids are: Up to 18. There are height requirements for rides, so give it another year if your children aren’t quite tall enough yet."  
//     },

//     {
//         title:"Disney California Adventure",
//         address:"Disney California Adventure",
//         img:"https://cdn.thecrazytourist.com/wp-content/uploads/2017/04/Disney-California-Adventure.jpg",
//         price:"550",
//         description:"Why you’ve got to go: Next to classic Disneyland is Disney California Adventure, a separate theme park that has seven themed areas that are completely different to Disneyland. Visit places like Cars Land, Paradise Pier, a Bug’s Land, and Hollywood Land. If your child is a Disney and Pixar fanatic, you can’t miss Disney California Adventure.What to do: Ride Mickey’s Fun Wheel, a rollercoaster with a 360-degree loop, and other exciting rides. There are tons of restaurants, themed areas, and characters to take pictures with. And while Disneyland does not serve alcohol, Disney California Adventure has places where parents can indulge.Get there when kids are: Up to 18. Mind the height requirements for rides"  
//     },

//     {
//         title:"Crissy Field",
//         address:"San Francisco",
//         img:"https://cdn.thecrazytourist.com/wp-content/uploads/2017/04/Crissy-Field.jpg",
//         price:"520",
//         description:"Why you’ve got to go: Chrissy Field is a former airfield that now serves as a campground on the beach. With views of the Golden Gate Bridge and still being within city limits, it’s the perfect place for families to get their nature fix next to an urban environment What to do Ride bikes from Marina Green to Fort Point or along the promenade, build sandcastles and swim on Baker Beach, have picnics, or do day trips into the city with the airfield being your base. Kitesurfers and windsurfers can set sail once the wind picks up. Grab a warm meal and souvenirs at the Warming Hut.Get there when kids are: Up to 18."  
//     },

//     {
//         title:"Crystal Cove State Park",
//         address:"Laguna Beach",
//         img:"https://cdn.thecrazytourist.com/wp-content/uploads/2017/04/Crystal-Cove-State-Park.jpg",
//         price:"470",
//         description:"Why you’ve got to go: This beautiful state park is over three miles long and offers the perfect setting for children to play and explore. There is also a trail system that weaves inland, for when it’s time to get out of the water.What to do Build sandcastles, explore tidepools, swim in the typically mellow ocean, go boogie-boarding, and walking or mountain biking through the inland trails. When there’s a slight breeze, many people also love to fly kites as there’s plenty of launching and landing space. There is a nearby campsite to camp at, or stay in one of the local lodges built in the early 1930s.Get there when kids are: Up to 18."  
//     },

//     {
//         title:"Legoland California",
//         address:"Carlsbad",
//         img:"https://cdn.thecrazytourist.com/wp-content/uploads/2017/04/Legoland-California.jpg",
//         price:"450",
//         description:"Why you’ve got to go: Children and parents will love expanding their imagination playing with the multitude of hands-on activities in Legoland. In the spirit of California’s coastline, there is a water park and aquarium. Legoland also has themed areas like Ninjago, Star Wars, Miniland, Fun Town, Castle Hill, and more.What to do: Throw on a bathing suit and go on the waterpark rides, get a Legoland driver’s license at the race track, use your imagination and build something grand, and admire the lego sculptures built with millions of plastic bricks. Kids can also play underwater instruments like pipe organs and musical fountains.Get there when kids are: Up to 12 years old."  
//     },
//     {
//         title:"Lake Tahoe",
//         address:"Lake Tahoe",
//         img:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/08/Lake-Tahoe.jpg",
//         price:"420",
//         description:"Why you’ve got to go: Lake Tahoe is a natural playground all year round. This massive lake is surrounded by forests, mountains, rivers, and kid-friendly eco lodges. It’s one of the best places for families to visit in California, as there’s no shortage of activities to do with kids.What to do: Spend warm days swimming, hiking, boating, kayaking, and fishing on Lake Tahoe itself. Once the snow falls, go snowmobiling, snowboarding, skiing, and sledding on the mountains. Lake Tahoe also has many indigenous sites surrounding the area, where kids can learn more about American history.Get there when kids are: Up to 18 years old."  
//     },
//     {
//         title:"Universal Studios",
//         address:"Los Angeles",
//         img:"https://cdn.thecrazytourist.com/wp-content/uploads/2017/04/Universal-Studios.jpg",
//         price:"400",
//         description:"Why you’ve got to go: Children can get real look at how their favorite movies are made. There are working movie studios, rides, and sites that will ignite imaginations.What to do: Go on the variety of rides, look at the behind-the-scenes of movie setups, learn how to do movie stunts, and catch a glimpse of Hollywood’s hottest stars. The most popular attraction right now is the Wizarding World of Harry Potter, a magical display where you can sample butterbeer and shop at Hogsmeade. The brave can even watch King Kong take down skyscrapers in 3D, the world’s largest (and apparently most intense) 3D performance.Get there when kids are: 3 years old and up."  
//     },
//     {
//         title:"Catalina Island",
//         address:"Catalina Island",
//         img:"https://cdn.thecrazytourist.com/wp-content/uploads/2017/04/Catalina-Island.jpg",
//         price:"470",
//         description:"Why you’ve got to go: Kids and adults alike will love having an adventurous getaway to this small pacific island. The island is so perfect for children, it’s even taken on the nickname of “Kidalina.” The variety of terrain means that no child (or adult) will be bored. Spend time in the Pacific Ocean, visit the town of Avalon, and watch bison graze in Catalina’s grasslands What to do Kayak, snorkel, and swim in the sea. Build sandcastles at the beach. Whale watch on the ferry ride over. If you want to get dry, simply head inland on a hike or meander through the peaceful town that doesn’t have a single traffic light.Get there when kids are: Up to 18."  
//     },
//     {
//         title:"Lake Shasta",
//         address:"Shasta",
//         img:"https://cdn.thecrazytourist.com/wp-content/uploads/2017/04/Lake-Shasta.jpg",
//         price:"410",
//         description:"Why you’ve got to go: Build strong family memories on one of California’s largest and most pristine lakes, surrounded by wilderness. You can have a classic American family experience complete with campfires and s’mores.What to do: Rent a houseboat for a few days and cruise around the coves, go wakeboarding, swimming, fishing, hiking, camping, fishing, water skiing, boating, standup paddleboarding, and much more. The lake is so huge, you can easily find a remote spot away from other families – where you’ll only have time to yourselves.Get there when kids are: Up to 18 years old"  
//     },
//     {
//         title:"San Diego Zoo",
//         address:"San Diego Zoo Safari Park",
//         img:"https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/San-Diego-Zoo-Safari-Park.jpg",
//         price:"400",
//         description:"Why you’ve got to go: The San Diego Zoo is the world’s largest zoo and famous for its beautiful natural exhibits. The zoo emphasizes conservation and is voted as the number one zoo in the world nearly every year. From big animals like pandas, polar bears, and cheetahs to the planet’s miniature creatures like meercats and reptiles, your children will see them all.What to do: Look up your child’s favorite animal on the zoo map and head straight there, feed friendly farm animals, watch educational shows, and go on a discovery tour. The park is so large, you can easily spend an entire day here without seeing every animal there is to see. Your child will love some of the hands-on exhibits where they can learn about what it’s like to live as an animal in the wild.Get there when kids are: Ages 3 to 18."  
//     },
//     {
//         title:"Sequoia National Park",
//         address:"Sequoia National Park",
//         img:"https://cdn.thecrazytourist.com/wp-content/uploads/2017/04/Sequoia-National-Park.jpg",
//         price:"370",
//         description:"Why you’ve got to go: Sequoia National Park is home to the sequoia, the largest tree in the world. There are thousands throughout the park with wildlife using them for food and shelter. There are a multitude of campsites, hiking trails, and natural springs for visitors to enjoy.What to do: Camp at one of the park’s well-manicured campsites that have all amenities including bear-proof storage boxes that you might need. Hike, mountain bike, and explore in a surreal landscape that feature’s the largest trees in the world. Your children will have a new appreciation for nature and alternative sense of scale after leaving this incredible park.Get there when kids are: Up to 18 years old." },
//     {
//         title:"La Brea Tar Pits",
//         address:"Los Angeles",
//         img:"https://cdn.thecrazytourist.com/wp-content/uploads/2017/04/La-Brea-Tar-Pits.jpg",
//         price:"370",
//         description:"Why you’ve got to go: During the ice age, animals fell into the La Brea Tar Pits and were preserved well enough for modern discovery. Today, you can see the remains of a saber-toothed cat, dire wolves, bison, ground sloths, turtles, and an American lion. There are still many excavation sites yet to be uncovered, and new discoveries are made almost daily.What to do: Learn about the ice age at the 3D theater, imagine how life once was in the observation pit, and admire the fossils of over 650 species. Children will love learning about the process of fossil excavation and preservation through a guided tour that gives an inside look of the pits. Plus, kids can walk real life paleontologists work on new sites.Get there when kids are: Up to 18 years old." },
    
// ]
