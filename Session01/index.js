//1. viet function dinh dang tien te: 
//10000000=> "10,000,000" || 123456=>"123,456" || 12000.02=> "12,000.02"
function formatMoney(value){
    // chuyen so thanh mang
    var tiente = Array.from(value+"");
    // tim vi tri co dau cham trong mang
    var vitri= tiente.indexOf('.');
    var dem=0;
    var dinhdang=[];

    // neu co dau cham trong mang thi duyet tu vi tri '.' duyet nguoc lai
    vitri = vitri != -1? vitri:tiente.length;

    for (var i = vitri-1; i >=0 ; i--){
        // dem xem du 3 pt thi them dau cham vao va reset bien dem
        if(dem == 3 || tiente[i]== "."){
            dinhdang.unshift(",");
            dem =1; 
        }
        // tang bien dem len 1 neu khong du 3 so
        else{
            dem ++;
        }
        dinhdang.unshift(tiente[i]);
    }
    // neu tim thay gia tri '.' trong value thi them nguoc lai tu gia tri '.' den het.
    if(vitri != -1){dinhdang= dinhdang.concat(tiente.splice(vitri,tiente.length-1))};
    return dinhdang.join("");
}
//2. write function format money in shorten
// 1000000000 => 1B, 1000000=> 1M
// 1000=> 1K , 1123400000=> 1.12B, 1342222=> 1.34B
//viet lai
function formatWallet(value, n){
    // khai bao obj voi : 9 <=> 1000000000 , 6 <=> 1000000 , 3 <=> 1000
    var obj = {9:"B" , 6:"M" , 3 : "K"};
    // lay cac key cua obj
    var objKeys = Object.keys(obj);
    for(var i=objKeys.length - 1 ; i>=0; i--){
        var val = Math.pow(10,objKeys[i]);
        if(value >=  val){
            val = value/val;
            let base = 10**n;
            val = Math.round(val * base) / base ;
            return val + obj[objKeys[i]];
        }
        if( i == 0){
            return value;
        }
    }
}

//3. assign ment
//viết hàm tính giai thừa của 1 số bất kỳ
    //factorial(3) => 6
function giaithua(n){
    if(n >1 ){
        return n *= giaithua(n-1);
    }
    return n;
}


// 4. Viết hàm trả về 1 phần từ bất kỳ trong mảng
//     getRandomElement(array) 
function getRandomElement(array){
    var len = array.length-1;
    var rd = Math.round(Math.random()*len);
    return array[rd];
}

// 5. Viết hàm cắt ra 1 phần tử bất kỳ trong mảng,
function pickOutRandomElement(array){
var vl = getRandomElement(array);
    var index = array.find((value, ix)=>{
        if(value === vl){
            return ix;
        }
    })
    array.splice(index,1);
    return array;
}

// 6. Cho 2 mảng bất kỳ. Viết hàm tìm ra những phần tử của mảng thứ 2 ko xuất hiện trong mảng đầu tiên
function findMissingElements(arr1, arr2){
    var newarr=[];
    arr2.forEach((valueArr2)=>{
        for(var i = 0; i < arr1.length;i++){
            if(valueArr2 == arr1[i]){
                i = arr1.length;
            }
            else if(i == arr1.length-1){
                newarr.push(valueArr2);
            }
        }
    });
    return newarr;
}
// 7. Cho 1 số tiền bất kỳ (n) Viết hàm tìm ra cách rút tiền với số tờ tiền nhỏ nhất.Có 4 mệnh giá (50$, 20$, 10$, 1$)
//     cashOut(324) => { 50:6, 20:1, 1:4}
function cashOut(n , obj={50:0 , 20:0, 10:0 ,1:0}){
    var arr = [50,20,10,1];
    for(var i =0 ; i< arr.length;){
        if(n - arr[i] >=0){
            obj[arr[i]] = obj[arr[i]] + 1;
            n -=arr[i];
        }
        else{
            i++;
        }
    }
    return obj;
}
// 8. Đổi số la mã: cho 1 số < 1000, in ra số la mã tương ứng ( I:1, V:5, X:10, L:50, C:100, D:500 )
//     convertToRomanNumber(143) => CXVIII , CXXXXIII = 1
function convertToRomanNumber(n){
    console.time("minh")
    var obj = {"500":'D',"400":"CD","100":'C', "90":"XC" ,"50":'L', "40":"XL" ,"10":'X', "5":'V',"1":'I'};
    var arr = [500,400,100,90,50,40,10,5,1];
    var result="";
    for(var i =0; i < arr.length;){
        if( n >= arr[i]){
            n= n - arr[i];
            result+=obj[arr[i].toString()];
        }
        else{
            i++;
        }
    }
    console.timeEnd("minh")
    return result;
}
// 9. In cách đọc số: In ra màn hình cách đọc số nhỏ hơn 1,000,000.
//     readNumber(726504) => bảy mươi hai vạn sáu ngàn năm trăm linh tư. 
// 726554 || 726550 => "bảy" mươi "hai" vạn "sáu" ngàn "năm" trăm "năm" mươi "bốn" || "bảy" mươi "hai" vạn "sáu" ngàn "năm" trăm "năm" mươi
// 72655||72650 => bảy mươi hai ngàn sáu trăm năm mươi năm || bảy mươi hai ngàn sáu trăm năm mươi
// 7265 || 7260 => bảy ngàn hai trăm sáu mươi năm || bảy ngàn hai trăm sáu mươi
// 726 || 720 => bảy trăm hai mươi 6 || bảy trăm hai mươi
function readNumber(n){
    var arrSo = {0:" không",1:" một" ,2:" hai", 3:" ba",4:" bốn",5:" năm",6:" sáu",7:" bảy",8:" tám",9:" chín",10:" mười"};
    var arrDonvi = [" mươi"," vạn"," ngàn"," trăm"," mươi"]; 
    var result="";
    var index = 5;
    while(n / 10 >= 1){
        var value =Math.floor(n%10);
        if(index == 5 && value == 0){
            --index;
            n = Math.floor(n/10);
            result = " không";
            continue;
        }
        if(index == 4  ){
            switch(value){
                case 0 : result = " linh" + result; break;
                case 1 : result = " mười" + result; break;
                default: result = arrSo[value] + " mươi" + result; break;
            }
            --index;
            n = Math.floor(n/10);
            continue; 
        }
        var doc = arrDonvi[index]||"" ;
        result = arrSo[value] + doc + result;
        n = Math.floor(n/10);
        --index;
    }
    if(n==1 && index ==0){
        result= "mười" + result;
        return result;
    }
    result= arrSo[n] + (arrDonvi[index] ||"") + result;
    return result
}

//10
//Input: [ [0,1,1], [0,1,1], [0,1,1], [0,1,1], [0,0,1]]
//Output : [ [0,0,0,0,0] , [0,0,0,0,1]


function Arrays2D(arr , index = 0, dembien=1 ,newArr = []){
    if(index > arr.length -1){
        return newArr;
    }
    var count =0;
    for(var i=0 ; i< arr[index].length ; i++){
        if(arr[index][i] == 0){
            count+=1;
            dembien = dembien * count;
            for(var j=0 ; j< dembien; j++){
                if(Array.isArray(newArr[j]) == false){
                    if(newArr.length == 0){
                        newArr[j] = [];
                    }
                    else{
                        let vl = dembien - j - 1;
                        newArr[j] = [... newArr[vl]];
                        newArr[j][newArr[j].length-1] = i;  
                        continue;
                    }
                }
                if(newArr[j].length == index+1){
                    continue;
                }
                else{
                    newArr[j].push(i);  
                }
            }   
        }
    }
    index ++;
    return Arrays2D(arr , index ,dembien, newArr);
}
///frtrtrtyyyrytry