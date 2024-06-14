import React from 'react';
import toast from 'react-hot-toast';

const img1="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEPDw0QEA8PDxAPDQ4NDQ8QDw8PDQ8NFREWFhURExUYHCggGBolGxUVITEhJSorMC4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0fHR0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABFEAACAQEDBggLBgUEAwAAAAAAAQIDBAUREhUhVJPRBjFRUmFxktIHCBciMjNBc4GRshMWQqGxsxQjNFNyJERiwkWDwf/EABsBAQADAQEBAQAAAAAAAAAAAAABAgMEBQYH/8QAMxEBAAICAQAIBQMDBAMAAAAAAAECAxEEBRITFCExUqEVMlFx4SJBYQax0WKB8PEzQlP/2gAMAwEAAhEDEQA/APcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjOEN/We76ErRaqipUotLHBuUpPijGK0t9AHRZeHC6uba30/Yx7wEeXG6+ZbNjHvAPLjdfMtmxj3gHlxuvmWzYx7wDy43XzLZsY94B5cbr5ls2Me8A8uN18y2bGPeAeXG6+ZbNjHvAPLjdfMtmxj3gHlxuvmWzYx7wDy43XzLZsY94B5cbr5ls2Me8A8uN18y2bGPeAeXG6+ZbNjHvAPLjdfMtmxj3gHlxuvmWzYx7wDy43XzLZsY94B5cbr5ls2Me8A8uN18y2bGPeA5fg14VLtvCvCz06lWlVqaKca1PIU5c2Mk2segDu4AAAAAAAADxnxk5v7C7I4+a69eTXSoRSf5v5gl5nHgTNpP8AiI6Un6p94bh78dA2mIntPb8p+489Yjsn3huE/AJ/+nsmPAiXttCXVSx/7ExMfurfoDJEfpvEz9pj/Lao8AIS/wDIRi/+dmkl88vA1rSk+HW1/s8vkdGc7DG+z60f6Z37a37NxeC2TWKttNr2NUW19ZvHE3HzPGvy5pbq2pMT/P8A0h+C6euQ2Eu+W7lP19mfxCPT7/hV+DCeuQ2D747lP19j4hHp9/wq/BlPXIbB98dyn1ex8Qj0+/4Vfg1nrcNi+8O4z6vZPxCPT7qPwczX+7hsX3ie4z6vZHxGPT7/AIVfg7lrUdi+8O4T6vZHxGPT7/hR+D+WtR2L7xPcJ9XsfEo9Pv8AhV8ApazHZPvD4fPq9kT0lHp9/wAKPgLLWY7J94n4fPq9kfE49Pv+FXwHlrEdk+8Ph8+r2T8Tj0+/4UfAqWsR2b7w+HT6vZHxOPT7/hR8Dpf347N94n4dPq9vyfE49Pv+FXwRl/fjs33h8On1ex8Ur6ff8KvgpL+/HZvvD4dPq9k/E6+n3YI3dKyWuwv7TKk7RRnFpZOS41Y9Jycjjzh1ud7dnG5EZomYjWn2Cc7pAAAAAAAAPFvGV9TdnvbR9EQNenSWTH/GP6Hn9pO5fd45/TH2JUTSMjSLKOkaRdbajpFust1lqeVB4xk4voeHz5S1ctq+Usc+DDnjWWsW+7do3nJaJrK6Voe5nXi6QmPC0bh81zf6Ww5N249urP0nxj/Mf88G5GtGWmLx5eVdZ6eLNTJH6ZfG8zgcjiW6uWuvp9J+0olV+JvpxdZjdZE9U6yjqx5fyGkdZRyi/aNG1JYE6VmWKSXT8ydI2wzp8jJP92Caw9hKGCZJLDMmFWGROkbljYTuXA35/V3f72H7sTyOkvmr9pe30Z8tvvD6xPNemAAAAAAAAeLeMr6m7Pe2j6IgYrNUTjHDmx/Q8u0TEy+7rWYrH2ZcCYEOJeLJ2q4F+snaHAdY6yuQV6yesjJa0rQ/Yy1Ms0ndZ0plxY81JpkjcT9W1Z5uo1DRlPRHFqKk+TT7T2eL0jFv05PCfr9Xw/S39N2xbycbxr9P3j/Me69qstSn6cJR6Wnh8z1a3rPlL5S2O9fOGnJmjNjkEsTqNe0Hgh1+gGlHXCNCrdT6CUKSinxaCUsE6T6GTtEw15wfITtXTE0BwN+f1d3+9h+7A8jpL5q/aXudGfLb7w+sTzXpgAAAAAAAHi3jKequv3to+mARLgLFaXFR/wAV+hz3pEv0qMcWpH2hzNCupI5LV1LlvSYZ0QzTgTsMBs2jJI2bHAjrG2KcCdrRLmLs4RTpJQqxdWC0KWP81Lr/ABfE68XLtSNS8jmdDYs09bH+mfb8OcoW6xV/bTUn+GrBRePW9B3U5lZ8peBn6Hz0+am4/jxbiumjxqlT6MIR3G0ciZ/dwd2rH7eyzuyHMh2Yk9pP1JxVj9mtabjozWEqUOtRUZfNaTSua0eUsr4aW84ddtnA14t06uC9inHHD4rcdNeV9Ycd+D6ZcBeNxWihi5Qco8+HnRXX7V8TematnJk496ecOKy2jbfg55hP2pIrKRKu2ORKHXr9/q7v97D92B5HSXzV+z2+i/lt94/s+sDzXqAAAAAAAAHi/jJ+quv3to+mIRLq1P0Y/wCK/QrNX6fj+Sv2hs2au4s5712i9IlzFCumcsxpw3ppsKRDPS6ZXaE4EbQYDYiURtMSwygTteJY3Ena223YLzq2d/y5vD2wbbg/h7PgWrktH7ufNxcWaP1R4/V2u7uESqLi85elFvSurlRp3y1HiZ+jIrLk6d6036ScfhijSvSdP3hwX6Ov/wCstiNejLiqQ6m8l/mdVOdht5Whx34eavnWUysqfFg+laUdVcsT5S57Y5jzhw148FqFZtypJSfHKGMJfHDj+J0U5Fo8pc1+NS3nDhK3AKl+GpWj1uEl+hvHMs5p4NPrLSr8A2vQtHap7maV5n1hnbgR+1nGWrghaoaY5FX/ABlhL5Sw/U1jlUnz8GNuDkjy8XReElCdO23fGcJQkq0MYyTT9bA8/pC0TNdfR6PRtZrF4mNeMPqs896QAAAAAAAB4v4ynqbs97aPoiB1emvNXUjaav0DjZ/0wkwvR6FbRLLRruJy2pCtqRZvUrcjGaac9sMtqnak/aZzWWVsUtmnVTKTDGasyZVTS2A2hjlEna0SxSiF4ljaJWhEZNPFNpria4xPimYiY1LfoXtUj6WE106H80YWwVny8HPbi0ny8HIWe9Kc9Dxg+nSvmcmTj2r4+bmvx71/lvxbWmLa6Ytr9DCL2r5TMOaa1nwmGzTvCtHiqN9EkpL8zpp0hyKeEWYX4eC3nVswviX46cZdMW4s7sfTN4+eNuS/RdJ+SdNqlb6M9GOQ+SSw/PiPSw9KYL+G9T/Lhy9HZaeOtx/DNKguv9D0K5NuOaTDyHwzU8LfcnTJ/vUymSfGGlPJ76ZLgAAAAAAAHi/jKepuz3to+iIHVqUtC6kduvCH1HHy+ELtmdqvWxZpVMLY3dXJsMJx6a7SmZTQZYWiS4myk0VnHWf2bNG85rjSf5MznFDG3HrPk5Cz3nB6G8l9PF8zKccw5r8a0eXi300+kznw83PMTCsojaYlilEleJYmgtCAlMWVQ3rHb5U9HpR5r/8AnIYZMEXc+TDW/wB3LUr0py48qL6VivyOO3GyR5eLktx7x5eLdpSjNYxafUYTE182E7r5kqQiUxYo2idL0ZNLmvTH5HTg5eXD8ks8nHx5fmh5x4Wra61uuXGKTjNrRxPGtTPoOFy7ciszaPGHkcrjVwTHVnzfQh2OUAAAAAAAA8X8ZT1F2e+tH0RA6jSehdSPR/aHt4raiGVMpMPSxXSmVmrupkDOauqmVJnON0VyJRlONeJTgUnGlGBScYzULROm/Nlh0ccfkZWxRLO+Ot/OHKWa9Yy0TWS+X8L3GFsMx5OS/FtHjXxbmUnxGM+DDSkgtDGFkYgXjIrMImGSMyswrMNmyWp05KS+K9jXIZ3p141LLJji8alzcL0ptacU/asMTinj224J494lWdupvib+RHYWWjFd5v4S5p266Gv7i/epntdFUmtL7+ryOk4mLV39H0eeq8wAAAAAAAA8X8ZT1F2e+tH0RA6bTehdSPSjyh6lLeEMqkRMOzHkWTI07KZFkyNOiuVdMpNXRXMtgU03rmCOq1jMgrNF4yQhlZxrxeAynEttlo2iUPReHRxoxvh2ralbebepXin6Sw6fYctuPMeTntx5jybEayftMZpMMppMGWRqTSUxpCykVmDS+WRpXSftsB1UdVaNoImiJo6dw3nlW26uiqv3qZ38GNRb7vnema6vT7Pps7XigAAAAAAAHjHjKeouz31o+iIHSKctC6kenHlDtrbwXjIltXJpkUiNOmuVZSEw3rmXUimm1czIpEabRnTlEaaRnMRpeOQgjTWOQFZq2rnMCs0bRmSik414ywvFtGU4YTN4lkVZmM8dH6V42hmVsB1IlkjazGcKs4lnayvZI7JR2gt2WluoK0Edmdm61wnqZVsuzorQ/dgdPHr1Yl8t0/Xq5Mf2n+76lOh8+AAAAAAAAeMeMp6i7PfWj6IgdDpy0LqR6dfKGkX8GRMstGRdMNIy6XUhMNa5VlIhpGZbKI0vGZOWRpeM5ljS8Z0qQ00jkLKRGm1eQspEabV5KykNNo5CyZXTSOQsmRNVozhWaNI5BgZzjbV5JgZziaxniUYGc4msXiUGc0W3Dr1/f1l2++p/uwJpGnyn9R/+TH9p/u+rDR84AAAAAAAAeMeMn6i7PfV/oiB51TqaF1HrVjwhydrqWaMydLRlZVMaaRlXUhpftVlIjS8ZU5RGl+1TlDSe1MoaO2FIaXjOspDTSM6ymRppGeVlMjTWOSn7QaXjkp+0HVT3pKqkdVeOWsqpWatY5ayqlZq1rzP5SplJo3rzP5TlGdqOivN/l16/X/rLt9/T/dgYTGpeJ0zm7S9J+kS+rA8UAAAAAAAA8Z8ZJfyLs9/X+iIHk0bzp6PS4uazvjk0hxTx7yyRvalyy7LJ71RXu2ReN8UuWXZZPesa3YZFlfdLll2GO9Y1uyyJV90uWfYZHeca0Y8ic+UuWfYY7zjT2eROfaXLPsMd5xnUyGfaPLPsMd5xnUyCv2jyz7DHeaJimRZX9R5Z9hjvNFoi5n+jyz7DI7xRb9Zn+jyz7DHeKH605/o8s+wx3iid3M/0eWfYY7xQ61z7wUeWfYY7xRPWun7wUeWfYZHeKJ690rhDR5Z9hjt6LRlulcIqPLPsMr21Foz3T946PLPsMjtaNI5NoaNovCFotl3uGPm2iknimtLqwMMkxM+CmXLOSY2+ujNkAAAAABwl43jbKNSeTYv4ijoyJUasXWww05UJYe3HixA4W08PJUvWWG1U/eUpwXzaJ0Ok8Pb8sl7ws8KsqtndCpOcXD7Nt5UcGmpMaQ6bmC79btPZs+8aDMF365aezZ94DMF363aezZ94DMF363aezZ94DMF3a5aezZ940GYLu1y1dmz7xoTmC7tctXZs+8aFalw2DGOTbK+GV57lGhoj/wAcHpY0MtK4LuUk/wCOrvBppOlRaeHKsoaG67vu5/7jjab/ANLR0vl9LpGhgtFzXdNJfxlSOEpSxhQoxelt4elxaWEtSrwfsCSybbWfnLFOFJebjpa08eAQtmC7tctXZs28aTs+793a5auzZ940bR937u1y09mz7wGYLv1u09mz7wGYLv1u09mz7xpGzMF363aezZ940k+79363aezZ940M1kuW76dSlU/irTL7OrTq5LjQSk4SUsHg+gaQ9ZpeEqE/Qs9SfJkec/yGkuUsvCe01l/Kuy1NvidSKoU+vGbWjqxA7Dd86rpxdeFOFV45UKc3OCWOjzmli8MCBsgAAAABrVLBSl6VKnLrhFgY802fV6OzjuAZos+r0dnHcAzTZ9Xo7OO4Bmiz6vR2cdwDNFn1ejs47gGaLPq9HZx3AM02fV6OzjuAZps+r0dnHcAzTZ9Xo7OO4Bmmz6vR2cdwDNNn1ejs47gGaLPq9HZx3AM02fV6OzjuAZos+r0dnHcAzRZ9Xo7OO4Bmiz6vR2cdwDNFn1ejs47gGabPq9HZx3AM0WfV6OzjuAlXVZ1xUKS/9cdwGzSoxhojFRXIlggLgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==";
const img2="https://www.paklap.pk/media/catalog/product/cache/2cc443e44e97595ea39006016c876eaa/h/p/hp_elitebook_650_g10.33_pm_1.jpg.webp";
const img3="https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/S200728028_1?1703677941"

const Home = () => {

    const productList = [{
            name: 'Mac Book',
            price: '120000',
            imgSrc: img1,
            id:'uehruqrehvjfvnajvbqoe'
        },
        {
            name: 'Dell Inspiron',
            price: '95000',
            imgSrc: img3,
            id:'hgvhfbvhdfjvbdjvfjhj'
        },
        {
            name: 'HP Elitebook',
            price: '70000',
            imgSrc: img2,
            id:'dhfbahfvbahvbjvhbafjh'
        },
    ]

    
    const addToCart=(options)=>{
        console.log(options);
        toast.success("Added to cart")
    }

    return (
        <div className="home">
          {productList.map((i) => (
            <ProductCard
              key={i.id}
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              id={i.id}
              handler={addToCart}
            />
          ))}
        </div>
      );
}

const ProductCard = ({id, name, imgSrc, price, handler}) => (
    <div className='productCard'>
        <img src={imgSrc} alt={name}/>
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=>handler({name, price, id, quantity:1, imgSrc})}>Add to Cart</button>
    </div>
);

export default Home