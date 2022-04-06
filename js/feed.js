var data = [
	{"name": "Mussum Ipsun User 1", "date": "22 de novembro às 16:37"},
	{"name": "Mussum Ipsun User 2", "date": "22 de novembro às 13:55"},
	{"name": "Mussum Ipsun User 3", "date": "22 de novembro às 13:31"},
	{"name": "Mussum Ipsun User 4", "date": "21 de novembro às 18:47"},
	{"name": "Mussum Ipsun User 5", "date": "21 de novembro às 17:23"},
	{"name": "Mussum Ipsun User 6", "date": "21 de novembro às 16:11"},
	{"name": "Mussum Ipsun User 7", "date": "21 de novembro às 15:33"},
	{"name": "Mussum Ipsun User 8", "date": "21 de novembro às 15:27"},
	{"name": "Mussum Ipsun User 9", "date": "21 de novembro às 15:13"},
	{"name": "Mussum Ipsun User 10", "date": "21 de novembro às 14:16"},
	{"name": "Mussum Ipsun User 11", "date": "20 de novembro às 18:47"},
	{"name": "Mussum Ipsun User 12", "date": "20 de novembro às 17:23"},
	{"name": "Mussum Ipsun User 13", "date": "20 de novembro às 16:11"},
	{"name": "Mussum Ipsun User 14", "date": "20 de novembro às 15:33"},
	{"name": "Mussum Ipsun User 15", "date": "20 de novembro às 16:37"},
	{"name": "Mussum Ipsun User 16", "date": "20 de novembro às 16:37"},
	{"name": "Mussum Ipsun User 17", "date": "20 de novembro às 16:37"},
	{"name": "Mussum Ipsun User 18", "date": "20 de novembro às 16:37"},
	{"name": "Mussum Ipsun User 19", "date": "20 de novembro às 16:37"},
	{"name": "Mussum Ipsun User 20", "date": "19 de novembro às 18:47"},
	{"name": "Mussum Ipsun User 21", "date": "19 de novembro às 17:23"},
	{"name": "Mussum Ipsun User 22", "date": "19 de novembro às 16:11"},
	{"name": "Mussum Ipsun User 23", "date": "19 de novembro às 15:33"},
	{"name": "Mussum Ipsun User 24", "date": "19 de novembro às 16:37"},
	{"name": "Mussum Ipsun User 25", "date": "19 de novembro às 16:37"},
	{"name": "Mussum Ipsun User 26", "date": "18 de novembro às 18:47"},
	{"name": "Mussum Ipsun User 27", "date": "18 de novembro às 17:23"},
	{"name": "Mussum Ipsun User 28", "date": "18 de novembro às 16:37"},
	{"name": "Mussum Ipsun User 29", "date": "18 de novembro às 16:11"},
	{"name": "Mussum Ipsun User 30", "date": "18 de novembro às 15:33"},
	{"name": "Mussum Ipsun User 31", "date": "18 de novembro às 16:37"},
	{"name": "Mussum Ipsun User 32", "date": "18 de novembro às 16:37"},
	{"name": "Mussum Ipsun User 33", "date": "18 de novembro às 16:37"},
	{"name": "Mussum Ipsun User 34", "date": "17 de novembro às 16:37"},
	{"name": "Mussum Ipsun User 35", "date": "17 de novembro às 16:37"},
	
];

var $post = $('#main-window').html();
var posts = '';
for(var i=0;i<20;i++){
	posts += $post;
}
$('#main-window').html(posts);

$.each($('.post'),function(key,el){
	
	var image = '#444 url(https://unsplash.it/50/?random&' + key + ') 50% 50% / cover no-repeat';
  $(this).find('.user-img').css('background',image);
  $(this).find('.user-name').text(data[key]['name']);
  $(this).find('.post-date').text(data[key]['date']);
  if(key % 9 === 0){
  	$(this).append('<div class="media photo"><img src="https://unsplash.it/600/350/?random&' + key + '" alt="post-image"/></div>');
  }
  if(key == 3) {
  	$(this).append('<div class="media video"><div class="embed-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/q0_octABnJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>');
  }
});