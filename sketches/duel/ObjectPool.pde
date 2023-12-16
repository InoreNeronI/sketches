// This tab is independent.
// Last update: 20. Sep. 2017

interface Poolable
{
  public boolean isAllocated();
  public void setAllocated(boolean indicator);
  public ObjectPool getBelongingPool();
  public void setBelongingPool(ObjectPool pool);
  public int getAllocationIdentifier();  // -1 : not allocated
  public void setAllocationIdentifier(int id);
  public void initialize();
}


final class ObjectPool<T extends Poolable>
{
  final int poolSize;
  final ArrayList<T> pool;  
  int index = 0;
  final ArrayList<T> temporalInstanceList;
  int temporalInstanceCount = 0;
  int allocationCount = 0;
    
  ObjectPool(int pSize) {
    poolSize = pSize;
    pool = new ArrayList<T>(pSize);
    temporalInstanceList = new ArrayList<T>(pSize);
  }
  
  ObjectPool() {
    this(256);
  }

  T allocate() {
    if (isAllocatable() == false) {
      println("Object pool allocation failed. Too many objects created!");
      // Need exception handling
      return null;
    }
    T allocatedInstance = pool.get(index);
    
    allocatedInstance.setAllocated(true);
    allocatedInstance.setAllocationIdentifier(allocationCount);
    index++;
    allocationCount++;

    return allocatedInstance;
  }
  
  T allocateTemporal() {
    T allocatedInstance = allocate();
    setTemporal(allocatedInstance);
    return allocatedInstance;
  }
  
  void storeObject(T obj) {
    if (pool.size() >= poolSize) {
      println("Failed to store a new instance to object pool. Object pool is already full.");
      // Need exception handling
    }
    pool.add(obj);
    obj.setBelongingPool(this);
    obj.setAllocationIdentifier(-1);
    obj.setAllocated(false);
  }
  
  boolean isAllocatable() {
    return index < poolSize;
  }
  
  void deallocate(T killedObject) {
    if (!killedObject.isAllocated()) {
      return;
    }

    killedObject.initialize();
    killedObject.setAllocated(false);
    killedObject.setAllocationIdentifier(-1);
    index--;
    pool.set(index, killedObject);
  }
  
  void update() {
    while(temporalInstanceCount > 0) {
      temporalInstanceCount--;
      deallocate(temporalInstanceList.get(temporalInstanceCount));
    }
    temporalInstanceList.clear();    // not needed when array
  }
  
  void setTemporal(T obj) {
    temporalInstanceList.add(obj);    // set when array
    temporalInstanceCount++;
  }
}