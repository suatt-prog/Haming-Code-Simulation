            const tus=document.getElementById("tus");
            const yaz=document.getElementById("yaz");
            const girdi=document.getElementById("girdi");
            const di=document.getElementById("di");
            const boy4=document.getElementById("boyut4");
            const boy8=document.getElementById("boyut8");
            const boy16=document.getElementById("boyut16");
            const dizi=[];
            var array=[]
            var deger
            var uzunluk
            var xorla=""
            var hold=[]
            function xor(arr){
                var dizi3=[];
                for(o=0;o<arr.length-1;o++){
                    for(var l=0;l<Math.log2(uzunluk)+1;l++){
                        if(o==0){
                            hold[l]=arr[o][l]
                        }
                        dizi3[l]=hold[l]^arr[o+1][l]
                    }
                    hold=dizi3
                }
                return dizi3
            }
            var binary=""
            function dec2bin(dec) {
                binary=(dec >>> 0).toString(2)
                for(c=(dec >>> 0).toString(2).length;c<Math.log2(uzunluk)+1;c++){
                    binary="0"+binary
                }
                return binary;
            }
            var yazi
            function bas(){
                yaz.parentNode.removeChild(yaz);
                boy16.parentNode.removeChild(boy16)
                boy8.parentNode.removeChild(boy8)
                boy4.parentNode.removeChild(boy4)
                deger=girdi.value;
                var p=0
                yazi=document.createElement("h3");
                yazi.innerHTML="Istediginiz biti değiştiriniz";
                di.appendChild(yazi);
                for(var w=0;w<=Math.log2(uzunluk);w++){
                    array[Math.pow(2,w)-1]= -1
                }
                for(var q=deger.length+Math.log2(uzunluk);q>=0;q--){
                    if(array[q]==-1){
                        continue
                    }
                    array[q]=deger[p]
                    p++
                }
                var ec=0
                var encoded=[]
                for(var z=0;z<array.length;z++){
                    if(array[z]==1){
                        encoded[ec]=dec2bin(z+1)
                        binary=""
                        console.log(encoded[ec])
                        ec++
                    }
                }
                var ty=Math.log2(uzunluk)
                for(var g=0;g<array.length;g++){
                    if(array[g]== -1){
                        array[g]=xor(encoded)[ty]
                        ty--
                    }
                }
                for(let i=array.length-1;i>=0;i--){
                    dizi[i]=document.createElement("input");
                    dizi[i].setAttribute("type","text");
                    dizi[i].setAttribute("size","1");
                    dizi[i].value=array[i];
                    di.appendChild(dizi[i]);
                }
                girdi.parentNode.removeChild(girdi);
                tus.parentNode.removeChild(tus);
                const yenile=document.createElement("input");
                yenile.setAttribute("type","submit");
                yenile.setAttribute("onclick","yenile();");
                yenile.setAttribute("value","refresh");
                di.appendChild(yenile);
            }
            var after="";
            function yenile(){
                yazi.parentNode.removeChild(yazi);
                for(var f=dizi.length-1;f>=0;f--){
                    after=after+dizi[f].value.toString()
                    if(dizi[f].value==1){
                        console.log("i"+f)
                    }
                }
                console.log("after"+after)
                var ec=0
                var encoded=[]
                for(var z=after.length-1;z>=0;z--){
                    if(dizi[z].value==1){
                        console.log(z)
                        encoded[ec]=dec2bin(z+1)
                        binary=""
                        console.log(encoded[ec])
                        ec++
                    }
                }
                console.log("hata adresi"+xor(encoded).toString(2))
                var yazson=document.createElement("h3");
                yazson.innerHTML="Degistirdiginiz bitin adresi: ";
                di.appendChild(yazson);
                var fin=document.createElement("h1")
                fin.innerHTML=xor(encoded).toString(2)
                di.appendChild(fin)
            }
