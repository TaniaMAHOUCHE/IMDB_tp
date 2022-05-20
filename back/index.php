<?
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$API_KEY = "169e6531";
$URl_OMDB = "http://www.omdbapi.com/?i=tt3896198&apikey=" . $API_KEY;


if (isset($_GET['movie_name'])){
    $movie_name = $_GET['movie_name'];
    // construct url 
    $url= $URl_OMDB . "&s=" . $movie_name;
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $data = curl_exec($curl);

    // if 'Search' in $data{
    //     $movies = json_decode($data)->Search;
    //     foreach ($movies as &$movie) {
    //         $movies->openpopup_url = $URl_OMDB . "" . $movie->imdbID
    //     }
    if (property_exists(json_decode($data), 'Search')) {
        $data = json_decode($data)->Search;
        foreach ($data as &$movie) {
            $movie->openpopup_url = $URl_OMDB . "&i=" . $movie->imdbID;
        }
    }else{
        $data = array(
            "error" => "the movie not found"
        );}
    curl_close($curl);
}else {
    $data = array(
        "error" => "no name of movie in the request"
    );
}
echo json_encode($data);

