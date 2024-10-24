import java.util.ArrayList;

class Playlist {
  
  public static void main(String[] args) {
    ArrayList<String> desertIslandSongs = new ArrayList<String>();
    desertIslandSongs.add("Can't help falling in love");
    desertIslandSongs.add("Baby I love you");
    desertIslandSongs.add("Piano man");
    desertIslandSongs.add("Creep");
    desertIslandSongs.add("Take me to church");
    desertIslandSongs.add("Let me entertain you");
    System.out.println(desertIslandSongs);
    System.out.println(desertIslandSongs.size());
    desertIslandSongs.remove(5);
    
    String temp = desertIslandSongs.get(0);
    desertIslandSongs.set(0, desertIslandSongs.get(4));
    desertIslandSongs.set(4, temp);
    System.out.println(desertIslandSongs);
  }
  
}
