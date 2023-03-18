const get = (req,res)=>{
    res.send([
            // home top 3 phots

            {
              id: "cw34r4776y6222dadm5",
              title:"Egyptian costumes in carnival parade",
              url: "https://thumbs.dreamstime.com/b/masks-ancient-egypt-carnival-parade-badajoz-spain-march-performers-costumes-inspired-ancient-egypt-take-part-142003482.jpg",
              content:"Performers with costumes inspired in Egyptian take part in the Carnival parade of comparsas at Badajoz City. This is one of the best carnivals in Spain, renown by all the national news media and especially highlighting massive participation of people",
              category:"costumes",
              date:"on March 2, 2019.",
              width: 1280,
              height: 956,
              },

              {
                id: "Wd_3reg352ffrt53wsdy_Mj8",
                title:"Galaxy`s Edge, Disney World, Hollywood Studios",
                url: "https://thumbs.dreamstime.com/z/galaxy-s-edge-disney-world-hollywood-studios-wall-poster-conceptual-design-new-star-wars-section-walt-orlando-141315570.jpg",
                content:"Wall poster with a conceptual design of the new Galaxy`s Edge Star Wars section of Hollywood Studios at Walt Disney World in Orlando, FL. Florida is a popular travel destination for people and tourists who travel on vacation or holiday.",
                category:"Hollywood",
                date:"on 25 December 2012.",
              },

              // blog post 
              {
                id:"wf343gy677844bhgtrwtrjuwgg",
                title:"Technology fair and exhibition in China",
                url: "https://thumbs.dreamstime.com/z/technology-fair-exhibition-china-23697237.jpg",
                content:"A Technology fair about semi-conductor and integration circle industry in Guangdong, China.",
                category:"Technology",      
                date:"on September 20, 2015.",
              },
              {
                id: "42rf98uu78wrr3rg",
                title:'Hollywood actress style',
                url: "https://thumbs.dreamstime.com/z/hollywood-actress-style-vintage-lady-posing-authentic-lighting-57095453.jpg",
                content:"Vintage lady posing with authentic hollywood lighting,Mother giving healthy food to her adorable child at home",
                category:"Hollywood",
                date:"on october 15,2016",
                width: 500,
                height: 351,
              },
              {
                id: "a2r4r3554367tfrev",
                title:"Healthy food in heart and cholesterol diet concept",
                url: "https://thumbs.dreamstime.com/z/healthy-food-heart-cholesterol-diet-concept-vintage-boards-61841247.jpg",
                content:"Healthy food in heart and cholesterol diet concept on vintage boards",
                category:"Food",
                date:" on September 20, 2015.",
                width: 700,
                height: 524,
                },


            {
          id: "5564rt_9987rte45gsh",
          title:"Buffet Dinner Restaurant Catering Food Concept",
          url: "https://thumbs.dreamstime.com/z/buffet-dinner-restaurant-catering-food-concept-66884106.jpg",
          content:"Buffet Dinner Restaurant Catering Food Concept.",
          category:"Celebration",
          date:"on March 2, 2019.",
          width: 640,
          height: 427,
        },
          {
            id: "ggbvy67_67t5553fcvy",
            title:"Pouring wine into glass and food",
            url: "https://thumbs.dreamstime.com/b/pouring-wine-glass-food-28336625.jpg",
            content:"Pouring wine into glass and food background",
            category:"Wine",
            date:"on December 21,2021",
            width: 500,
            height: 500,
          },
          {
            id: "77gyhvtf455hghhfv_658",
            title:"Grabbing money",
            url: "https://thumbs.dreamstime.com/z/grabbing-money-18095541.jpg",
            content:"Grabbing money isolated on white background ",
            category:"Technology",
            date:"on 25 December 2012.",
            width: 1193,
            height: 1006,
          },
          {
            id: "ggyyrgc_i454tinh",
            title:'NJ - Prabhu Deva and Indian Dancers perform for Donald Trump at Edison New Jersey Hindu Indian-American',
            url: "https://thumbs.dreamstime.com/b/october-edison-nj-prabhu-deva-indian-dancers-perform-donald-trump-edison-new-jersey-hindu-indian-american-rally-84988823.jpg",
            content:"NJ - Prabhu Deva and Indian Dancers perform for Donald Trump at Edison New Jersey Hindu Indian-American rally for Humanity United Against Terror",
            category:"Celebration",
            date:"on october 15,2016",
            width: 500,
            height: 351,
          },
          
          {
            id:"uuy65ggvbc4rtrtt_iijmn76",
            title:'Sustainable development, eco friendly lifestyle concept. 3d rend',
            url: "https://thumbs.dreamstime.com/z/sustainable-development-eco-friendly-lifestyle-concept-d-rend-sustainable-development-eco-friendly-lifestyle-concept-d-rendering-116932229.jpg",
            content:"Sustainable development, eco friendly lifestyle concept. 3d rendering of arrow circle icon on fresh spring meadow with blue sky in background.",
            category:"Technology",
            date:"on october 15,2016",
            width: 500,
            height: 351,
          },
          {
              id: "67ggvbfrdc_886gjjhf4542",
              title:"Galaxy`s Edge, Disney World, Hollywood Studios",
              url: "https://thumbs.dreamstime.com/z/galaxy-s-edge-disney-world-hollywood-studios-wall-poster-conceptual-design-new-star-wars-section-walt-orlando-141315570.jpg",
              content:"Wall poster with a conceptual design of the new Galaxy`s Edge Star Wars section of Hollywood Studios at Walt Disney World in Orlando, FL. Florida is a popular travel destination for people and tourists who travel on vacation or holiday.",
              category:"Hollywood",
              date:"on 25 December 2012.",
              width: 1193,
              height: 1006,
            },
            {
              id: "uubcfgbhyru_667t54f664",
              title:'Working out at home with online fitness course, workout video or personal trainer service in phone. Health or sport mobile app.',
              url: "https://thumbs.dreamstime.com/z/working-out-home-online-fitness-course-workout-video-personal-trainer-service-phone-health-sport-mobile-app-144081381.jpg",
              content:"Working out at home with online fitness course, workout video or personal trainer service in phone. Health or sport mobile app in cellphone. Fit woman with smartphone and gym equipment",
              category:"Gym",
              date:"on october 15,2016",
              width: 500,
              height: 351,
            },

            // middle image
            {
              id: "iwfw990hu7765tfw",
              title:"Portrait in Carnival",
              url: "https://thumbs.dreamstime.com/b/fantasy-carnival-badajoz-spain-march-performers-costumes-inspired-take-part-parade-comparsas-city-one-141467531.jpg",
              content:"Performers with costumes inspired in fantasy take part in the Carnival parade of comparsas at Badajoz City. renown by all the national news media and especially highlighting massive participation of people",
              category:"Celebration",
              date:"on March 2, 2019.",
              width: 640,
              height: 427,
              related:['Recent','Images','videos','news','Blogs'],
            },
                
        
    ])
}
module.exports.apiController= get