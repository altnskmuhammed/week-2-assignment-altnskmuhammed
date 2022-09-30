DEPLOY SİTE

https://63374d21caf786049ac0b407--joyful-cuchufli-369a56.netlify.app/todos.html#

HTTP STATUS NEDİR ?

HTTP STATUS  bir cevabın başarılı mı yoksa başarısız mı olduğunu anlamamıza yardımcı olan kodlardır. Çoğu zaman, kullanıcılar tarayıcıda döndürülen kodları görmezler, ancak tarayıcı sunucuyla her etkileşim kurduğunda bu kodlar istemciye döner.

HTTP durum kodları hata mesajının ve başarı mesajının görüntülenmesi açısından, bir uygulamayı kullanan izleyiciler için daha iyi bir kullanıcı deneyimi sağlamaya yardımcı olabilir.



HTTP STATUS KODLARININ ANLAMLARI  =

1xx	
Bilgi
```bash
100	Continue	Devam
101	Switching Protocols	Anahtarlama Protokolü
102	Processing	WebDAV : İşlem
2xx	
Başarı
```bash
200	OK	Tamam
201	Created	Oluşturuldu
202	Accepted	Onaylandı
203	Non-Authoritative Information	Yetersiz Bilgi
204	No Content	İçerik Yok
205	Reset Content	İçeriği Baştan al
206	Partial Content	Kısmi İçerik
207	Multi-Status	WebDAV :Çok-Statü
210	Content Different	WebDAV :Farklı İçerik
3xx	
```

Yönlendirme
```bash
300	Multiple Choices	Çok Seçenek
301	Moved Permanently	Kalıcı Taşındı
302	Moved Temporarily	Geçici Taşındı
303	See Other	Diğerlerine Bak
304	Not Modified	Güncellenmedi
305	Use Proxy	Proxy Kullan
307	Temporary Redirect	Geçici olarak yeniden gönder
```
4xx	İstemci hataları
```bash
400	Bad Request	Kötü İstek
401	Unauthorized	Yetkisiz
402	Payment Required	Ödeme Gerekli
403	Forbidden	Yasaklandı
404	Not Found	Sayfa Bulunamadı
405	Method Not Allowed	İzin verilmeyen Metod
406	Not Acceptable	Kabul Edilemez
407	Proxy Sunucusuna giriş yapmak gerekli	
408	İstek zaman aşamına uğradı	
409	Conflict	(Hatlar) Çakıştı,Çakışma
410	Gone	Bak
411	Length Required	
412	Precondition Failed	
413	Request Entity Too Large	
414	Request-URI Too Long	
415	Unsupported Media Type	Desteklenmeyen medya türü
416	Requested range unsatifiable	
417	Expectation failed	
422	Unprocessable entity	WebDAV :
423	Locked	WebDAV :
424	Method failure	WebDAV :
451	Unavailable For Legal Reasons	Yasal nedenlerle gösterilemiyor
5xx	
```
Sunucu hatası
```bash
500	Internal Server Error	
501	Uygulanmamış	
502	Geçersiz Ağ Geçidi	
503	Hizmet Yok	
504	Gateway Timeout	
505	HTTP Version not supported	HTTP versiyonu desteklenmiyor
507	Insufficient storage	WebDAV 
```
 <b>HTTP Request'in metodlari  nelerdir?</b>
 
 1-) GET: Bu metod sunucudan veri almak için kullanılır. GET ve POST metodları en sık kullanılan metodlar olup sunucudaki kaynaklara erişmek için kullanılırlar.
 GET metodu ile sorgu metinleri URL içinde gönderilebilir. Bunun en önemli faydası kullanıcıların bookmark edebilmeleri ve aynı sorguyu içeren istekleri daha sonra gönderebilmelerini sağlaması ve tarayıcıda önceki sorguların “geri” tuşu ile veya tarayıcı geçmişinden çağrılarak aynı sayfalara ulaşabilmeleridir. Güvenlik açısından URL’lerin ekranda görüntüleniyor olması ve URL’in hedefine ulaşıncaya kadar ve hedef sunucu üzerinde iz kayıtlarında görülebilmesi gönderilen parametrelerin gizlilik ihtiyacı varsa sıkıntı yaratabilir. Bu nedenlerle hassas isteklerin GET ile gönderilmemelidir.

2-)POST: Bu metod ile sunucuya veri yazdırabilirsiniz. Bu metodla istek parametreleri hem URL içinde hem de mesaj gövdesinde gönderilebilir. Sadece mesaj gövdesinin kullanımı yukarıda sayılan riskleri engelleyecektir. Tarayıcılar geri butonuna basıldığında POST isteğinin mesaj gövdesinde yer alan parametreleri tekrar göndermek isteyip istemedimizi sorarlar. Bunun temel nedeni bir işlemi yanlışlıkla birden fazla yapmayı engellemektir. Bu özellik ve de güvenlik gerekçeleriyle bir işlem gerçekleştirileceğinde POST metodunun kullanılması önerilir.
3-)PUT: Bu metod ile servis sağlayıcı üzerindeki bir kaynağı güncelleyebilirsiniz. Hangi kaynağı güncelleyecekseniz o kaynağın id’sini göndermek zorunludur.

4-)HEAD: GET metoduyla benzer işleve sahiptir ancak geri dönen yanıtta mesaj gövdesi bulunmaz (yani başlıklar ve içerikleri GET metoduyla aynıdır). Bu nedenle GET mesajı gönderilmeden önce bir kaynağın var olup olmadığını kontrol etmek için kullanılabilir.

5-)DELETE: Bu metod ile sunucudaki herhangi bir veriyi silebilirsiniz.

6-)CONNECT: Bir proxy sunucu üzerinden başka bir sunucuya bağlanmak ve proxy sunucuyu bir tünel gibi kullanmak için kullanılır.

7-)OPTIONS: Bu metod belli bir kaynak için kullanılabilecek HTTP metodlarını sunucudan sorgulamak için kullanılır.

8-)TRACE: Teşhis amaçlı kullanılan bir metoddur. Sunucu bu metodla gelen istek mesajının içeriğini aynen yanıt gövdesinde geri göndermelidir. Bu yöntemle sunucu ile istemci arasında bir vekil sunucu varsa bu sunucunun ve yaptığı değişikliklerin tespiti mümkün olabilir.

9-)PATCH: Bu metod bir kaynağa istediğiniz küçük çaplı değişimi yapmanızı sağlar.

10-)SEARCH: Bir dizinin altındaki kaynakları sorgulamak için kullanılır.



FETCH APİ METODLARI?
//// GET İsteği
```bash

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())//parse json data
  .then(function(todos){
    todos.forEach(todo => {
        console.log(todo.title);//Başlıkları console' a yazdırma
    });
})
```


// POST isteği ile verimizi servera gönderelim  
```bash
let payload = {
    title: "Blog Title",
    body: "lorem ipsum", 
    userId:1
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err));
  ```
  
  //META VERİLER
  ```bash
fetch('https://jsonplaceholder.typicode.com/posts/1').then(function(response) {  
    console.log(response.headers.get('Content-Type'));  
    console.log(response.headers.get('Date'));
    console.log(response.status);  
    console.log(response.statusText);  
    console.log(response.type);  
    console.log(response.url);  
});
   ```


 ## Sıralama ödevi algoritması
##### todos.js dosyası içerisinde düzenlenecek.
table thead kısmındaki sıralama yapılacak kolonlara event listener eklenecek.
event listener hangi kolon için tıklanıyorsa sort metodu kullanılarak sıralama yapılacak.
sıralanmış todos'todus içerisine atılacak.
renderTodos metodu çalıştırılacak.


## HTTP - Fetch Api Ödevi

##### README.md dosyası, txt, js dosyası açarak yapılabilir.

* HTTP Status'ün 
  * Görevleri nelerdir? Bu görevlerin anlamlarını açıklayınız.
   
* HTTP Request'in metodlari  nelerdir? 
  
*  Fetch API'nin metodlari ile örnekleri

